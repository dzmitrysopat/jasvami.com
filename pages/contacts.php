<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Контакты</title>
    <link rel="shortcut icon" href="../img/icons/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../style/style.css">
    <link rel="stylesheet" href="../style/wrapper.css">
    <link rel="stylesheet" href="../style/mobile.css">
    <script src="../script/wrapper.js"></script>
</head>
<body class="body_hide">
    <div w3-include-html="../pages/wrapper/header.php"></div>
    <main id="main" class="page-main">
    <div class="main-container header-container">
        <article class="page-header">
            <h1 class="page-title">Контакты</h1>
            <ul class="breadcrumb">
                <li class="breadcrumb"><a href="../index.php">Главная</a></li>
                <li class="breadcrumb"></li>
            </ul>
        </article>
    </div>
    <article class="page-container contact-page element-animation">
        <section class="contact-cards">
            <div class="contact-card">
                <p class="information no-border">Телефон (Life):</p>
                <div class="contact-icons">
                    <img src="../img/icons/phone.svg" alt="">
                    <a href="https://viber.click/375296525073"><img src="../img/icons/viber.svg" alt=""></a>
                    <a href="https://t.me/Hannet_M"><img src="../img/icons/telegram.svg" alt=""></a>
                    <a href="https://wa.me/375296525073"><img src="../img/icons/whatsapp.svg" alt=""></a>
                </div>
                <a href="tel:+375296525073" class="orange contact-link">+375 (29) 652-50-73</a>
            </div>
            <div class="contact-card">
                <p class="information no-border">Email:</p>
                    <img src="../img/icons/mail.svg" alt="">
                <a href="mailto:hannamanko@jasvami.by" class="orange contact-link">hannamanko@jasvami.by</a>
            </div>
            <div class="contact-card">
                <p class="information no-border">Адрес консультаций:</p>
                    <img src="../img/icons/location.svg" alt="">
                <a href="https://yandex.by/maps/org/psikholog_manko_anna/103503798131/?ll=30.943396%2C52.420821&z=17" target="_blank" class="orange contact-link">Беларусь, г. Гомель, ул. Сосновая,18 каб. 6.2</a>
            </div>
            <div class="contact-card">
                <p class="information no-border">График консультаций:</p>
                    <img src="../img/icons/clock.svg" alt="">
                <a href="#" class="orange contact-link">По предварительной записи</a>
            </div>
        </section>
        <section class="map">
            <script type="text/javascript" class="map" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A67d1e092523e53c38dd1c98d154298ef7fa58b4ca3be46853dd99d27c06a4fbe&amp;width=600&amp;height=370&amp;lang=ru_RU&amp;scroll=true"></script>
        </section>
    </article>
    <button id="consultation" class="green-btn btn contact-btn element-animation">Получить консультацию</button>

    <div class="container">
        <div class="modal-wrapper" id="modalWrapper">
            <div class="modal">
                <button id="close-btn" class="close orange">&times;</button>
                <form action="" method="POST">
                    <div class="fieldset" id="fieldset">
                        <br>
                        <div class="input-section">
                            <p class="information no-border element-animation">
                                Вы можете связаться со мной через:
                            </p>
                            <a href="https://wa.me/375296525073" class="orange contact-form-link">
                                <img src="../img/icons/whatsapp.svg" alt="">
                                Whatsapp
                            </a>
                            <a href="https://t.me/Hannet_M" class="orange contact-form-link">
                                <img src="../img/icons/telegram.svg" alt="">
                                Telegram
                            </a>
                            <a href="https://viber.click/375296525073" class="orange contact-form-link">
                                <img src="../img/icons/viber.svg" alt="">
                                Viber
                            </a>
                            <p class="information no-border element-animation">
                                Позвонить мне:
                            </p>
                            <a href="tel:+375296525073" class="orange contact-form-link">
                                <img src="../img/icons/phone.svg" alt="">
                                +375 (29) 652-50-73
                            </a>
                            Или написать на эл.почту:
                            <a href="mailto:hannamanko@jasvami.by" class="orange contact-form-link">
                                <img src="../img/icons/mail.svg" alt="">
                                hannamanko@jasvami.by
                            </a>
                    </div>
                    <img src="../img/form/messaging-1-animate-green.svg" alt="" class="form-img error-img">
                    </div>           
                </form>
            </div>
        </div>             
    </div>
    </main>

    <div w3-include-html="../pages/wrapper/footer.php"></div>
    <script>includeHTML();</script>
    <script src="../script/script.js"></script>
</body>
</html>
