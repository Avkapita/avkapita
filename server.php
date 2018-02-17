<?php

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

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
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
        </ul>
    </body>
    </html>';

    $headers = "From: Проверка формы <avkapita@gmail.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('avkapita@gmail.com', 'Заказ', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

?>