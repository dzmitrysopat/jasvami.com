<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>header</title>
    <link rel="stylesheet" href="../../style/wrapper.css">
    <link rel="stylesheet" href="../../style/mobile.css">
</head>
<body>
    <header>
        <article role="navigation" class="burger-menu">
            <div id="menuToggle">
            <input type="checkbox" id="checkBurger"  onclick="checkCheckbox()">
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <article class="burger-copyright">
                    <a class="logotype" href="../../index.php">
                        <img class="burger-favicon" src="../../img/icons/logo-inverse.svg" alt="">
                        <h2 class="logo-title burger-title">Анна Манько <br> Психолог рядом с Вами</h2>
                    </a>
                </article>

                <a href="../../pages/about.php"><li>О консультациях</li></a>
                <a href="../../pages/clients.php"><li>Клиент психолога</li></a>
                    <a href="../../pages/clients/relationship.php" class="sub-item">Он и она</a>
                    <a href="../../pages/clients/supervisor.php" class="sub-item">Руководителю</a>
                <a href="../../pages/sport.php"><li>О спорте</li></a>
                    <a href="../../pages/clients/trainer.php" class="sub-item">Тренеру</a>
                    <a href="../../pages/clients/athlete.php" class="sub-item">Спортсмену</a>
                <a href="../../pages/tests.php"><li>Тесты-опросники</li></a>
                <a href="../../pages/contacts.php"><li>Контакты</li></a>
                <a href="../../pages/payment.php"><li>Оплата</li></a>
            </ul>
            </div>
        </article>

        <article class="head-container">
            <a class="logotype" href="../../index.php">
                <img class="favicon" src="../../img/icons/logo.svg" alt="">
                <h2 class="logo-title">Анна Манько <br> Психолог рядом с Вами</h2>
            </a>

            <nav id="nav">
                <a href="../../pages/about.php" class="nav-link">О консультациях</a>
                <article class="dropdown">
                    <a href="../../pages/clients.php" class="nav-link">Клиент психолога</a>
                    <section class="dropdown-content">
                        <a href="../../pages/clients/relationship.php" >Он и она</a>
                        <a href="../../pages/clients/supervisor.php">Руководителю</a>
                </section>
                </article>
                <article class="dropdown">
                    <a href="../../pages/sport.php" class="nav-link">О спорте</a>
                    <section class="dropdown-content">
                        <a href="../../pages/clients/trainer.php">Тренеру</a>
                        <a href="../../pages/clients/athlete.php">Спортсмену</a>
                </section>
                </article>
                <article class="dropdown">
                    <a href="../../pages/tests.php" class="nav-link">Тесты</a>
                    <section class="dropdown-content">
                        <a href="../../pages/tests/leader.php">Оценка лидерства</a>
                        <a href="../../pages/tests/stress.php">Уровень стресса</a>
                        <a href="../../pages/tests/samoocenka.php">Уровень самооценки</a>
                        <a href="../../pages/tests/relationship.php">Роли в отношениях</a>
                        <a href="../../pages/tests/isolation.php">Изолированность личности</a>
                        <a href="../../pages/tests/depression.php">Тревога и Депрессия</a>
                    </section>
                </article>
            <a href="../../pages/contacts.php" class="nav-link">Контакты</a>
            <a href="../../pages/payment.php" class="nav-link">Оплата</a>
            </nav>
        </article>
        <script src="../../script/script.js"></script>
    </header>
</body>
</html>