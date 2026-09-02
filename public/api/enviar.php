<?php

/**
 * ============================================================================
 * RECEBE O FORMULARIO DO SITE E ENVIA POR E-MAIL
 * ----------------------------------------------------------------------------
 * Mesma arquitetura ja em producao em arcanjosodontologia.com.br.
 *
 * O envio e por SMTP autenticado no Titan, nao pelo mail() da HostGator. O
 * SPF de stericleanbrasil.com.br autoriza apenas o Titan a enviar em nome do
 * dominio (v=spf1 include:spf.titan.email ~all), entao mandar pelo servidor
 * web falharia o SPF e cairia em spam.
 *
 * Fluxo:
 *   1. valida origem, metodo e limites anti-robo;
 *   2. revalida os campos — validacao de front-end nao vale nada, qualquer
 *      um pode postar direto neste endereco;
 *   3. envia por SMTP autenticado;
 *   4. opcionalmente copia o lead para uma planilha do Google;
 *   5. responde JSON, que e o que o front espera.
 *
 * GET ?status=1 devolve um diagnostico da instalacao — util no primeiro deploy.
 * ============================================================================
 */

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

require __DIR__ . '/lib/PHPMailer/Exception.php';
require __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require __DIR__ . '/lib/PHPMailer/SMTP.php';

// ---------------------------------------------------------------------------
// Dominios autorizados a chamar este endpoint
// ---------------------------------------------------------------------------
const ORIGENS_PERMITIDAS = [
    'https://stericleanbrasil.com.br',
    'https://www.stericleanbrasil.com.br',
    'http://stericleanbrasil.com.br',
    'http://www.stericleanbrasil.com.br',
    'http://localhost:8080',
    'http://localhost:4173',
    'http://localhost:5173',
];

const CAMINHO_CONFIG = __DIR__ . '/config.php';
const ARQUIVO_LIMITE = __DIR__ . '/.rate-limit.json';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

$origem = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origem, ORIGENS_PERMITIDAS, true)) {
    header('Access-Control-Allow-Origin: ' . $origem);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

/** Resposta JSON e encerra. */
function responder(int $codigo, array $corpo): void
{
    http_response_code($codigo);
    echo json_encode($corpo, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

/** Registra falha no log do servidor, sem vazar detalhe para o navegador. */
function registrar(string $mensagem): void
{
    error_log('[stericlean-lead] ' . $mensagem);
}

// ---------------------------------------------------------------------------
// Preflight
// ---------------------------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ---------------------------------------------------------------------------
// Diagnostico da instalacao — GET ?status=1
// Nao expoe senha nem destinatarios, so diz o que esta faltando.
// ---------------------------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'GET' && isset($_GET['status'])) {
    $temConfig = is_readable(CAMINHO_CONFIG);
    $cfg = $temConfig ? require CAMINHO_CONFIG : [];
    responder(200, [
        'ok' => true,
        'php' => PHP_VERSION,
        'phpmailer' => class_exists(PHPMailer::class),
        'openssl' => extension_loaded('openssl'),
        'config_encontrada' => $temConfig,
        'smtp_configurado' => $temConfig
            && !empty($cfg['smtp_host'])
            && !empty($cfg['smtp_pass'])
            && $cfg['smtp_pass'] !== 'SUA_SENHA_AQUI',
        'destinatarios' => $temConfig ? count($cfg['destinatarios'] ?? []) : 0,
        'planilha_ligada' => $temConfig && !empty($cfg['planilha_url']),
        'pasta_gravavel' => is_writable(__DIR__),
    ]);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    responder(405, ['ok' => false, 'erro' => 'metodo_nao_permitido']);
}

if ($origem !== '' && !in_array($origem, ORIGENS_PERMITIDAS, true)) {
    registrar('origem recusada: ' . $origem);
    responder(403, ['ok' => false, 'erro' => 'origem_nao_autorizada']);
}

if (!is_readable(CAMINHO_CONFIG)) {
    registrar('config.php ausente em ' . CAMINHO_CONFIG);
    responder(500, ['ok' => false, 'erro' => 'configuracao_ausente']);
}
$cfg = require CAMINHO_CONFIG;

// ---------------------------------------------------------------------------
// Limite por IP — um arquivo JSON basta nesta escala e evita depender de banco
// ---------------------------------------------------------------------------
function dentroDoLimite(int $maximo): bool
{
    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? 'desconhecido';
    $agora = time();
    $registros = [];

    if (is_readable(ARQUIVO_LIMITE)) {
        $bruto = file_get_contents(ARQUIVO_LIMITE);
        $registros = json_decode((string) $bruto, true) ?: [];
    }

    // descarta o que passou de uma hora
    foreach ($registros as $chave => $marcas) {
        $registros[$chave] = array_values(array_filter($marcas, fn($t) => $agora - $t < 3600));
        if (!$registros[$chave]) {
            unset($registros[$chave]);
        }
    }

    $doIp = $registros[$ip] ?? [];
    if (count($doIp) >= $maximo) {
        return false;
    }

    $doIp[] = $agora;
    $registros[$ip] = $doIp;
    @file_put_contents(ARQUIVO_LIMITE, json_encode($registros), LOCK_EX);

    return true;
}

if (!dentroDoLimite((int) ($cfg['max_por_hora_por_ip'] ?? 5))) {
    responder(429, ['ok' => false, 'erro' => 'muitas_tentativas']);
}

// ---------------------------------------------------------------------------
// Corpo da requisicao
// ---------------------------------------------------------------------------
$bruto = file_get_contents('php://input');
if ($bruto === false || strlen($bruto) > 20000) {
    responder(400, ['ok' => false, 'erro' => 'corpo_invalido']);
}

$dados = json_decode((string) $bruto, true);
if (!is_array($dados)) {
    responder(400, ['ok' => false, 'erro' => 'json_invalido']);
}

$texto = static function (string $campo) use ($dados): string {
    $valor = $dados[$campo] ?? '';
    if (!is_string($valor)) {
        return '';
    }
    // remove quebras de linha de campos de uma linha: e assim que se injeta
    // cabecalho falso num e-mail
    return trim(preg_replace('/[\r\n]+/', ' ', $valor) ?? '');
};

// ---------- Armadilhas anti-robo ----------
// Campo invisivel: humano nunca preenche, robo que varre o HTML quase sempre.
if ($texto('website') !== '') {
    registrar('honeypot preenchido — descartado silenciosamente');
    responder(200, ['ok' => true]); // finge sucesso para o robo nao insistir
}

$abertoEm = (int) ($dados['form_opened_at'] ?? 0);
$minimo = (int) ($cfg['segundos_minimos_no_form'] ?? 3);
if ($abertoEm > 0) {
    $segundos = time() - (int) ($abertoEm / 1000);
    if ($segundos >= 0 && $segundos < $minimo) {
        registrar("preenchido em {$segundos}s — abaixo do minimo");
        responder(200, ['ok' => true]);
    }
}

// ---------- Validacao ----------
$nome = mb_substr($texto('name'), 0, 120);
$empresa = mb_substr($texto('company'), 0, 120);
$email = mb_substr($texto('email'), 0, 160);
$telefone = mb_substr($texto('phone'), 0, 40);
$cultura = mb_substr($texto('crop'), 0, 120);
$mensagem = mb_substr(trim((string) ($dados['message'] ?? '')), 0, 3000);

$digitos = preg_replace('/\D/', '', $telefone) ?? '';
$erros = [];

if (mb_strlen($nome) < 2) {
    $erros[] = 'nome';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erros[] = 'email';
}
if (mb_strlen($mensagem) < 2) {
    $erros[] = 'mensagem';
}
// Telefone e opcional; so recusa se vier preenchido e malformado.
if ($telefone !== '' && (strlen($digitos) < 10 || strlen($digitos) > 13)) {
    $erros[] = 'telefone';
}

if ($erros) {
    responder(422, ['ok' => false, 'erro' => 'validacao', 'campos' => $erros]);
}

// ---------------------------------------------------------------------------
// Monta o e-mail
// ---------------------------------------------------------------------------
$atrib = is_array($dados['attribution'] ?? null) ? $dados['attribution'] : [];
$origemCampanha = [];
foreach (['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as $chave) {
    if (!empty($atrib[$chave]) && is_string($atrib[$chave])) {
        $origemCampanha[$chave] = mb_substr($atrib[$chave], 0, 200);
    }
}

$e = static fn(string $v): string => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');
$temWhats = strlen($digitos) >= 10 && strlen($digitos) <= 13;
$whatsappLink = 'https://wa.me/' . (strlen($digitos) > 11 ? $digitos : '55' . $digitos);
$recebidoEm = (new DateTimeImmutable('now', new DateTimeZone('America/Sao_Paulo')))
    ->format('d/m/Y \à\s H:i');

$linhas = [
    'Nome' => $e($nome),
    'E-mail' => '<a href="mailto:' . $e($email) . '" style="color:#308856">' . $e($email) . '</a>',
    'Telefone' => $telefone !== ''
        ? ($temWhats
            ? '<a href="' . $e($whatsappLink) . '" style="color:#308856">' . $e($telefone) . '</a>'
            : $e($telefone))
        : '<em style="color:#8b8f8c">não informado</em>',
    'Empresa' => $empresa !== '' ? $e($empresa) : '<em style="color:#8b8f8c">não informada</em>',
    'Cultura / segmento' => $cultura !== '' ? $e($cultura) : '<em style="color:#8b8f8c">não informada</em>',
    'Mensagem' => nl2br($e($mensagem)),
];

$tabela = '';
foreach ($linhas as $rotulo => $valor) {
    $tabela .= '<tr>'
        . '<td style="padding:10px 16px;border-bottom:1px solid #dceadf;font:600 11px/1.4 Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#5c625e;white-space:nowrap;vertical-align:top">' . $rotulo . '</td>'
        . '<td style="padding:10px 16px;border-bottom:1px solid #dceadf;font:400 15px/1.5 Arial,sans-serif;color:#1f2622">' . $valor . '</td>'
        . '</tr>';
}

if ($origemCampanha) {
    $itens = '';
    foreach ($origemCampanha as $chave => $valor) {
        $itens .= '<div style="font:400 13px/1.6 Arial,sans-serif;color:#5c625e"><strong>' . $e($chave) . ':</strong> ' . $e($valor) . '</div>';
    }
    $blocoCampanha = '<div style="margin-top:24px;padding:16px;background:#f1f8f3;border-left:3px solid #308856">'
        . '<div style="font:700 11px/1.4 Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#308856;margin-bottom:8px">Origem da campanha</div>'
        . $itens . '</div>';
} else {
    $blocoCampanha = '<div style="margin-top:24px;font:400 13px/1.6 Arial,sans-serif;color:#8b8f8c">'
        . 'Sem UTMs — provavelmente tráfego direto ou orgânico.</div>';
}

$botaoWhats = $temWhats
    ? '<a href="' . $e($whatsappLink) . '" style="display:inline-block;margin-top:24px;padding:14px 24px;background:#0f8244;color:#fff;font:700 13px/1 Arial,sans-serif;text-decoration:none;border-radius:999px">Responder pelo WhatsApp</a>'
    : '<a href="mailto:' . $e($email) . '" style="display:inline-block;margin-top:24px;padding:14px 24px;background:#308856;color:#fff;font:700 13px/1 Arial,sans-serif;text-decoration:none;border-radius:999px">Responder por e-mail</a>';

$corpoHtml = '<!doctype html><html lang="pt-BR"><body style="margin:0;padding:24px;background:#eef4ef">'
    . '<div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #dceadf;border-radius:12px;overflow:hidden">'
    . '<div style="background:#1d2621;padding:20px 24px">'
    . '<div style="font:700 11px/1.4 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#83cb96">SteriClean</div>'
    . '<div style="font:400 22px/1.3 Georgia,serif;color:#fff;margin-top:6px">Novo contato pelo site</div>'
    . '</div>'
    . '<div style="padding:24px">'
    . '<div style="font:400 13px/1.5 Arial,sans-serif;color:#8b8f8c;margin-bottom:16px">Recebido em ' . $e($recebidoEm) . '</div>'
    . '<table style="width:100%;border-collapse:collapse">' . $tabela . '</table>'
    . $botaoWhats
    . $blocoCampanha
    . '</div></div>'
    . '<div style="max-width:600px;margin:12px auto 0;font:400 11px/1.5 Arial,sans-serif;color:#8b8f8c;text-align:center">'
    . 'Enviado automaticamente pelo formulário de stericleanbrasil.com.br</div>'
    . '</body></html>';

$corpoTexto = "NOVO CONTATO PELO SITE\n"
    . "Recebido em {$recebidoEm}\n\n"
    . "Nome: {$nome}\n"
    . "E-mail: {$email}\n"
    . 'Telefone: ' . ($telefone !== '' ? $telefone : 'não informado') . "\n"
    . 'Empresa: ' . ($empresa !== '' ? $empresa : 'não informada') . "\n"
    . 'Cultura: ' . ($cultura !== '' ? $cultura : 'não informada') . "\n\n"
    . "Mensagem:\n{$mensagem}\n"
    . ($origemCampanha ? "\nOrigem: " . json_encode($origemCampanha, JSON_UNESCAPED_UNICODE) . "\n" : '');

// ---------------------------------------------------------------------------
// Envia
// ---------------------------------------------------------------------------
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = (string) $cfg['smtp_host'];
    $mail->Port = (int) $cfg['smtp_port'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $cfg['smtp_user'];
    $mail->Password = (string) $cfg['smtp_pass'];
    $mail->SMTPSecure = ((string) ($cfg['smtp_secure'] ?? 'ssl')) === 'tls'
        ? PHPMailer::ENCRYPTION_STARTTLS
        : PHPMailer::ENCRYPTION_SMTPS;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Timeout = 20;

    // O remetente precisa ser a propria caixa autenticada. Usar o e-mail de
    // quem preencheu aqui faria o Gmail marcar como falsificacao.
    $mail->setFrom((string) $cfg['remetente_email'], (string) ($cfg['remetente_nome'] ?? 'Site'));

    foreach (($cfg['destinatarios'] ?? []) as $destino) {
        $mail->addAddress((string) $destino);
    }

    // Responder o e-mail cai direto na caixa de quem preencheu
    $mail->addReplyTo($email, $nome);

    $mail->Subject = (string) ($cfg['assunto'] ?? 'SteriClean — Novo contato pelo site');
    $mail->isHTML(true);
    $mail->Body = $corpoHtml;
    $mail->AltBody = $corpoTexto;

    $mail->send();
} catch (PHPMailerException $erro) {
    registrar('falha SMTP: ' . $mail->ErrorInfo);
    responder(502, ['ok' => false, 'erro' => 'falha_no_envio']);
}

// ---------------------------------------------------------------------------
// Copia para a planilha — nunca derruba a resposta se falhar
// ---------------------------------------------------------------------------
if (!empty($cfg['planilha_url'])) {
    $carga = json_encode([
        'token' => $cfg['planilha_token'] ?? '',
        'recebido_em' => $recebidoEm,
        'nome' => $nome,
        'email' => $email,
        'telefone' => $telefone,
        'empresa' => $empresa,
        'cultura' => $cultura,
        'mensagem' => $mensagem,
        'utm_source' => $origemCampanha['utm_source'] ?? '',
        'utm_medium' => $origemCampanha['utm_medium'] ?? '',
        'utm_campaign' => $origemCampanha['utm_campaign'] ?? '',
        'pagina' => is_string($dados['page_url'] ?? null) ? mb_substr($dados['page_url'], 0, 400) : '',
    ], JSON_UNESCAPED_UNICODE);

    $ch = curl_init((string) $cfg['planilha_url']);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $carga,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true, // o Apps Script responde com redirect
        CURLOPT_TIMEOUT => 10,
    ]);
    $resposta = curl_exec($ch);
    if ($resposta === false) {
        registrar('planilha falhou: ' . curl_error($ch));
    }
    curl_close($ch);
}

responder(200, ['ok' => true]);
