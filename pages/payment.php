<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Оплата</title>
    <link rel="shortcut icon" href="../img/icons/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="../style/style.css">
    <link rel="stylesheet" href="../style/wrapper.css">
    <script src="../script/wrapper.js"></script>
    <script src="../script/itc-slider.js" defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
          var slider = new ItcSimpleSlider('.itcss', {
            loop: true,
            autoplay: true,
            swipe: true
          });
        });
      </script>
</head>
<body class="body_hide">
    <div w3-include-html="../pages/wrapper/header.php"></div>
    <main id="main" class="page-main">
    <div class="main-container header-container">
        <article class="page-header">
            <h1 class="page-title">Оплата</h1>
            <ul class="breadcrumb">
                <li class="breadcrumb"><a href="../index.php">Главная</a></li>
                <li class="breadcrumb"></li>
            </ul>
        </article>
    </div>
    <div class="page-container">
        <p class="information no-border element-animation" style="text-align:justify;">
        Согласно пункта 5.4 Публичного договора о платных услугах в сфере психологической помощи ИП Манько А.Е.: Заказчик осуществляет оплату первой и последующих консультаций после её завершения (по факту оказания Услуги), безналичным платежом (банковским перевод на счет Исполнителя, с помощью услуг агентов по сервису E-POS посредством АИС «Расчет», а так же по средствам банковской платёжной карты через систему WebPay (сайт www.webpay.by).
        </p>

        <p class="information no-border element-animation" style="text-align:justify;">
            Безопасный сервер WEBPAY устанавливает шифрованное соединение по защищенному протоколу TLS и конфиденциально принимает от клиента данные его платёжной карты (номер карты, имя держателя, дату окончания действия, и контрольный номер банковской карточке CVC/CVC2).
        </p>

        <p class="information no-border element-animation" style="text-align:justify;">
            После совершения оплаты с использованием банковской карты необходимо сохранять полученные карт-чеки (подтверждения об оплате) для сверки с выпиской из карт-счёта (с целью подтверждения совершённых операций в случае возникновения спорных ситуаций).
        </p>

        <p class="information no-border element-animation" style="text-align:justify;">
            В случае, если Вы не получили заказ (не оказана услуга), Вам необходимо обратиться (в службу технической поддержки) по телефону <a href="tel:+375296525073" class="orange contact-link">+375 (29) 652-50-73</a> или e-mail <a href="mailto:hannamanko@jasvami.by" class="orange contact-link">hannamanko@jasvami.by</a>
                . Менеджеры Вас проконсультируют.
        </p>

        <p class="information no-border element-animation" style="text-align:justify;">
            При оплате банковской платежной картой возврат денежных средств осуществляется на карточку, с которой была произведена оплата
        </p>

        <img src="../img/icons/payment-icons.png" alt="" class="payment-icons">
        
        <h2 class="logo-title element-animation signature" class="sign">Психолог рядом с Вами, <br class="none"> Анна Манько</h2>

    </main>
    <div w3-include-html="../pages/wrapper/footer.php"></div>
    
    <script>includeHTML();</script>
    <script src="../script/script.js"></script>
</body>
</html>