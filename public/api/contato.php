<?php
/**
 * Recebe o formulário de contato do site e envia por e-mail.
 *
 * Fica em /api/contato.php na raiz do domínio. O .htaccess serve arquivos
 * reais direto, então esta rota não cai no fallback do index.html.
 *
 * Responde sempre JSON: {"ok":true} ou {"ok":false,"error":"..."}.
 */

declare(strict_types=1);

// ---------------------------------------------------------------------------
// Configuração
// ---------------------------------------------------------------------------

/**
 * Para onde vão os leads.
 *
 * TROCA FUTURA: quando existir o e-mail institucional da SteriClean, basta
 * substituir o endereço abaixo (ou acrescentar outros na lista) e fazer o
 * deploy. Nada mais precisa mudar.
 */
const DESTINATARIOS = [
    'ztagenciamktdigital@gmail.com',
];

/**
 * Remetente. Precisa ser um endereço DO PRÓPRIO DOMÍNIO: é o que faz o SPF
 * bater e o e-mail chegar na caixa de entrada. Usar o e-mail de quem
 * preencheu o formulário aqui derruba a entrega para spam — por isso ele
 * entra como Reply-To, mais abaixo.
 */
const REMETENTE_EMAIL = 'nao-responda@stericleanbrasil.com.br';
const REMETENTE_NOME  = 'Site SteriClean';

/** Teto de envios por IP por hora, para conter robô de formulário. */
const LIMITE_POR_HORA = 5;

/** Guarda uma cópia local caso o envio falhe, para não perder o lead. */
const ARQUIVO_LOG = __DIR__ . '/contatos.log';

// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function responde(int $status, array $corpo): void
{
    http_response_code($status);
    echo json_encode($corpo, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Cabeçalho de e-mail aceita quebra de linha como separador: injeção clássica. */
function limpa(string $valor, int $max = 200): string
{
    $valor = str_replace(["\r", "\n", "\0", '%0a', '%0d'], ' ', $valor);
    $valor = trim($valor);
    return mb_substr($valor, 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    responde(405, ['ok' => false, 'error' => 'metodo_nao_permitido']);
}

// O front manda JSON; o fallback cobre um POST de formulário puro.
$bruto = file_get_contents('php://input') ?: '';
$dados = json_decode($bruto, true);
if (!is_array($dados)) {
    $dados = $_POST;
}

// Campo isca: fica escondido na página, então só robô preenche. Responde
// sucesso de propósito, para o robô não descobrir que foi barrado.
if (!empty($dados['website'] ?? '')) {
    responde(200, ['ok' => true]);
}

$nome     = limpa((string) ($dados['name'] ?? ''), 120);
$email    = limpa((string) ($dados['email'] ?? ''), 160);
$empresa  = limpa((string) ($dados['company'] ?? ''), 120);
$telefone = limpa((string) ($dados['phone'] ?? ''), 40);
$cultura  = limpa((string) ($dados['crop'] ?? ''), 120);
$mensagem = trim((string) ($dados['message'] ?? ''));
$mensagem = mb_substr(str_replace("\0", '', $mensagem), 0, 5000);

if ($nome === '' || $mensagem === '') {
    responde(422, ['ok' => false, 'error' => 'campos_obrigatorios']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responde(422, ['ok' => false, 'error' => 'email_invalido']);
}

// --- limite por IP -----------------------------------------------------------
$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'desconhecido');
$controle = sys_get_temp_dir() . '/sc-contato-' . md5($ip) . '.txt';
$agora = time();
$marcas = [];
if (is_readable($controle)) {
    $marcas = array_filter(
        array_map('intval', explode(',', (string) file_get_contents($controle))),
        static fn(int $t): bool => $t > $agora - 3600
    );
}
if (count($marcas) >= LIMITE_POR_HORA) {
    responde(429, ['ok' => false, 'error' => 'muitas_tentativas']);
}
$marcas[] = $agora;
@file_put_contents($controle, implode(',', $marcas), LOCK_EX);

// --- monta o e-mail ----------------------------------------------------------
$quando = (new DateTimeImmutable('now', new DateTimeZone('America/Sao_Paulo')))
    ->format('d/m/Y H:i');

$assunto = sprintf('Novo contato pelo site — %s', $nome !== '' ? $nome : 'sem nome');

$corpo = implode("\n", [
    'Novo contato enviado pelo formulário do site.',
    '',
    'Nome......: ' . $nome,
    'E-mail....: ' . $email,
    'Telefone..: ' . ($telefone !== '' ? $telefone : '—'),
    'Empresa...: ' . ($empresa !== '' ? $empresa : '—'),
    'Cultura...: ' . ($cultura !== '' ? $cultura : '—'),
    '',
    'Mensagem:',
    $mensagem,
    '',
    str_repeat('-', 56),
    'Recebido em ' . $quando . ' (horário de Brasília)',
    'Origem: ' . limpa((string) ($_SERVER['HTTP_REFERER'] ?? 'stericleanbrasil.com.br')),
    'IP: ' . $ip,
]);

$cabecalhos = implode("\r\n", [
    sprintf('From: %s <%s>', REMETENTE_NOME, REMETENTE_EMAIL),
    'Reply-To: ' . $email,      // responder no e-mail vai direto para o lead
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: PHP/' . PHP_VERSION,
]);

$assuntoCodificado = '=?UTF-8?B?' . base64_encode($assunto) . '?=';

$enviado = false;
foreach (DESTINATARIOS as $destino) {
    // O -f define o Return-Path, que o cPanel exige para não marcar como nulo.
    if (@mail($destino, $assuntoCodificado, $corpo, $cabecalhos, '-f' . REMETENTE_EMAIL)) {
        $enviado = true;
    }
}

// Cópia local só quando o envio falha: assim o lead não some, mas também não
// acumulamos dados pessoais em arquivo sem necessidade.
if (!$enviado) {
    @file_put_contents(
        ARQUIVO_LOG,
        '[' . $quando . '] FALHA NO ENVIO' . "\n" . $corpo . "\n\n",
        FILE_APPEND | LOCK_EX
    );
    responde(500, ['ok' => false, 'error' => 'falha_no_envio']);
}

responde(200, ['ok' => true]);
