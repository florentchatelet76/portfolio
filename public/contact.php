<?php
// Débug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Autoload PHPMailer
require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// Récupère et décode le JSON
$data = json_decode(file_get_contents('php://input'), true);

if (! $data) {
    echo 'Données invalides.';
    exit;
}

// Sécurisation et validation
$name    = htmlspecialchars($data['name']   ?? '');
$email   = filter_var(   $data['email']  ?? '', FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars($data['message'] ?? '');

if (! $email) {
    echo 'Email invalide.';
    exit;
}

$mail = new \PHPMailer\PHPMailer\PHPMailer(true);

try {
    // Config SMTP Infomaniak
    $mail->isSMTP();
    $mail->Host       = 'mail.infomaniak.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'florent@florentchatelet.fr';
    $mail->Password   = 'Fagitmdr74;;';
    $mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Expéditeur / destinataire
    $mail->setFrom('florent@florentchatelet.fr', 'Florent Chatelet');
    $mail->addAddress('florent.chatelet@gmail.com');
    $mail->addReplyTo($email, $name);

    // Sujet & corps
    $mail->Subject = "Nouveau message de $name";
    $mail->Body    = "Nom   : $name\nEmail : $email\n\n$message";

    $mail->send();

    // Affichage de confirmation
    echo "Merci pour ton message, $name !";
    exit;

} catch (\PHPMailer\PHPMailer\Exception $e) {
    // Affiche l’erreur SMTP
    echo "Erreur SMTP : {$mail->ErrorInfo}";
    exit;
}

// (Pas de echo ni de fermeture PHP en fin de fichier)
