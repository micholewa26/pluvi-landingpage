<?php
/**
 * Endpoint formularza kontaktowego pluvi.pl.
 * Przyjmuje POST (JSON), waliduje i wysyła zgłoszenie mailem na skrzynkę firmową.
 * Dane nie opuszczają infrastruktury home.pl.
 */

declare(strict_types=1);

const RECIPIENT   = 'kontakt@pluvi.pl';
const FROM        = 'kontakt@pluvi.pl';
const RATE_LIMIT  = 5;      // max zgłoszeń...
const RATE_WINDOW = 3600;   // ...na godzinę z jednego IP

$allowedOrigins = ['https://pluvi.pl', 'https://www.pluvi.pl'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    $data = $_POST;
}

$field = static fn(string $key): string =>
    trim(mb_substr((string) ($data[$key] ?? ''), 0, 1000));

// Honeypot — boty wypełniają ukryte pole; udajemy sukces i nic nie wysyłamy.
if ($field('_gotcha') !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

// Prosty limit per IP (plik w katalogu tymczasowym serwera).
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/pluvi-form-' . md5($ip) . '.json';
$hits = [];
if (is_readable($rateFile)) {
    $hits = json_decode((string) file_get_contents($rateFile), true) ?: [];
}
$hits = array_values(array_filter($hits, static fn($t) => $t > time() - RATE_WINDOW));
if (count($hits) >= RATE_LIMIT) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'rate']);
    exit;
}

$name     = $field('name');
$email    = $field('email');
$phone    = $field('phone');
$pumps    = $field('pumpCount');
$app      = $field('application');
$crop     = $field('cropType');
$cropOth  = $field('cropTypeOther');
$message  = $field('message');

$errors = [];
if (mb_strlen($name) < 2) {
    $errors[] = 'name';
}
if ($email === '' && $phone === '') {
    $errors[] = 'contact';
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}
if ($pumps === '' || $app === '' || $crop === '') {
    $errors[] = 'select';
}
if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation', 'fields' => $errors]);
    exit;
}

$lines = [
    'Nowe zapytanie ze strony pluvi.pl',
    '',
    'Imię i nazwisko / Firma: ' . $name,
    'E-mail: ' . ($email !== '' ? $email : '—'),
    'Telefon: ' . ($phone !== '' ? $phone : '—'),
    'Ilość pomp: ' . $pumps,
    'Zastosowanie: ' . $app,
    'Rodzaj uprawy: ' . ($crop === 'inne' && $cropOth !== '' ? $cropOth : $crop),
    'Wiadomość:',
    $message !== '' ? $message : '—',
    '',
    'IP nadawcy: ' . $ip,
    'Data: ' . date('Y-m-d H:i:s'),
];
$body = implode("\n", $lines);

$subject = mb_encode_mimeheader('Zapytanie ze strony pluvi.pl — ' . $name, 'UTF-8');
$headers = [
    'From: PLUVI Formularz <' . FROM . '>',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: pluvi-form',
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . str_replace(["\r", "\n"], '', $email);
}

$sent = mail(RECIPIENT, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    $hits[] = time();
    @file_put_contents($rateFile, json_encode($hits));
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail']);
}
