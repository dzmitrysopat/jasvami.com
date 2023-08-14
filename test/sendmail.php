use PHPMailer\PHPMailer\PHPMAiler;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

<!-- от кого письмо -->
$mail->setFrom('dzmitrysopat@gmail.com', 'Привет! Дмитрий Сергеевич')ж
<!-- кому отправить -->
$mail->addAddress('dzmitrysopat@gmail.com');
<!-- тема письма -->
$mail->Subject = 'Тестовая тема';

<!-- тело письма -->
$body = '<h1>Заголовок тестовой заявки</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '$_POST['name'].'</p>';
}
if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Телефон:</strong> '$_POST['tel'].'</p>';
}
if(trim(!empty($_POST['question']))){
    $body.='<p><strong>Психологический запрос (тема/проблема):</strong> '$_POST['question'].'</p>';
}
if(trim(!empty($_POST['description']))){
    $body.='<p><strong>желаемое время консультации и формат:</strong> '$_POST['description'].'</p>';
}

$mail->Body = $body;

<!-- отправка письма -->
if (!$mail->send()){
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type:application/json');
echo json_encode($response);
?>