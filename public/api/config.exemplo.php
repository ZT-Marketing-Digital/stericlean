<?php
/**
 * MODELO DE CONFIGURACAO — copie este arquivo como `config.php`.
 *
 * IMPORTANTE: `config.php` NAO vai para o Git nem para o deploy automatico.
 * Ele e enviado UMA VEZ pelo Gerenciador de Arquivos do cPanel, para a pasta
 * /api/ do site, e permanece la entre os deploys (o deploy nunca apaga
 * arquivo que ele mesmo nao subiu).
 *
 * Assim a senha do e-mail nunca fica no repositorio.
 *
 * O e-mail de stericleanbrasil.com.br e do TITAN, nao do cPanel: o MX do
 * dominio aponta para mx1.titan.email. Por isso o SMTP abaixo e o do Titan,
 * e a caixa noreply@ precisa ser criada no painel do Titan.
 *
 * E tambem por isso o envio chega na caixa de entrada: o SPF do dominio
 * autoriza o Titan a enviar. Mandar pelo PHP mail() da HostGator falharia
 * o SPF e cairia em spam.
 */

return [
    // ---- SMTP da caixa criada no Titan ----
    'smtp_host' => 'smtp.titan.email',
    'smtp_port' => 465,          // 465 = SSL | 587 = STARTTLS
    'smtp_secure' => 'ssl',      // 'ssl' ou 'tls'
    'smtp_user' => 'noreply@stericleanbrasil.com.br',
    'smtp_pass' => 'SUA_SENHA_AQUI',

    // ---- Quem envia e quem recebe ----
    'remetente_email' => 'noreply@stericleanbrasil.com.br',
    'remetente_nome' => 'Site SteriClean',
    'destinatarios' => [
        'ztagenciamktdigital@gmail.com',
        // 'comercial@stericleanbrasil.com.br',
    ],

    'assunto' => 'SteriClean — Novo contato pelo site',

    // ---- Copia para planilha (Google Apps Script). Vazio = desligado. ----
    'planilha_url' => '',
    'planilha_token' => '',

    // ---- Anti-spam ----
    'max_por_hora_por_ip' => 5,
    'segundos_minimos_no_form' => 3,
];
