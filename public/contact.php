<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/src/PHPMailer.php';
require __DIR__ . '/src/SMTP.php';
require __DIR__ . '/src/Exception.php';


$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);

    // Exemple simple d’envoi par mail (tu peux adapter !)
    $to = "florent.chatelet@gmail.com";
    $subject = "Message de $name depuis ton site";
    $body = "Nom: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";



    if (mail($to, $subject, $body, $headers)) {
        echo "Merci pour ton message, $name !";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
} else {
    echo "Données invalides.";
}
