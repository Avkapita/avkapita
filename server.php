<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/PHPMailer/src/Exception.php';
require '/PHPMailer/src/PHPMailer.php';
require '/PHPMailer/src/SMTP.php';


    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $building = $_POST['building'];
    $flat = $_POST['flat'];;
    $stage = $_POST['stage'];
    $comment = $_POST['comment'];

    $change = $_POST['change']; // 1 или null
    $change = isset($change) ? 'НЕТ' : 'ДА';

    $cardPayment = $_POST['card-payment']; // 1 или null
    $cardPayment = isset($cardPayment) ? 'НЕТ' : 'ДА';

    $disturb = $_POST['dont-disturb']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';



$mail = new PHPMailer(true);
//Server settings
$mail->isSMTP(); // устанавливаете соединение с SMTP
$mail->Host = 'smtp.mail.ru';  // сервер с которого будет отправляться письмо (смотрится на сайте почты)
$mail->SMTPAuth = true;   // нужна аутентификация
$mail->Username = 'an_polyakova@list.ru'; // почта, с которой шлем письмо
$mail->Password = 'rjifr87';  // пароль от почты
$mail->SMTPSecure = 'ssl';  // тип шифрования
$mail->Port = 465;  // TCP порт (смотрится на сайте почты)

//Recipients
$mail->setFrom('an_polyakova@list.ru', 'Компания вкусных бургеров!'); // почта, с которой шлем письмо. !Обязательно совпадает с почтой выше
$mail->addAddress('avkapita@gmail.com');     // почта получателя (должна брвться из формы)
$mail->CharSet = 'Utf-8'; // кодировка на всякий случай

//Content
$mail->isHTML(true);                                  // email в формате html
$mail->Subject = "Ваш заказ бургера";
$mail->Body    = "<p>Привет, $name! Вы заказали <b>самый</b> вкусный бургер.
            <h2>Ваш заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Улица:' . $street . '</li>
            <li>Дом:' . $house . '</li>
            <li>Корпус:' . $building . '</li>
            <li>Квартира:' . $flat . '</li>
            <li>Этаж:' . $stage . '</li>
            <li>Комментарий:' . $comment . '</li>
            
            <li>Нужна ли сдача: ' . $change . '</li>
            <li>Оплата по карте: ' . $cardPayment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>";
$mail->AltBody = "Вы заказали самый вкусный бургер"; //альтернативное письмо без html

$data = [];
if ($mail->send()) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
}else{
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
}
echo json_encode($data);

