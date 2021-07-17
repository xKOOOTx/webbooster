<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//  от кого письмо
$mail->setFrom('aegusev91@gmail.com', 'Отправитель');
//  кому отправить
$mail->addAddress('kooot123@gmail.com');
//  тема письма
$mail->Subject = 'Новый заказ!';

//  тело письма
$body = '<h1>Новый заказ!</h1>';

if(trim(!empty($_POST['userName']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['userName'].'</p>';
}
if(trim(!empty($_POST['userEmail']))) {
    $body.='<p><strong>Адрес электронной почты:</strong> '.$_POST['userEmail'].'</p>';
}
if(trim(!empty($_POST['userPhone']))) {
    $body.='<p><strong>Номер телефона:</strong> '.$_POST['userPhone'].'</p>';
}
if(trim(!empty($_POST['userItem']))) {
    $body.='<p><strong>Наименование товара:</strong> '.$_POST['userItem'].'</p>';
}


$mail->Body = $body;

//  отправляем

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
