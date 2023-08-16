<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Форма отправки</title>
</head>
<body>
    <div class="wrapper">
        <div class="form">
            <form action="sendmail.php" id="form" class="form__body">
                <h1 class="form__title">Запись на консультацию</h1>
                <div class="form__item">
                    <label for="formName" class="form__label">Имя*:</label>
                    <input type="text" id="formName" class="form__input _req" name="name">
                </div>
                <div class="form__item">
                    <label for="formTel" class="form__label">Номер телефона*:</label>
                    <input type="text" id="formTel" class="form__input _req _tel" name="tel">
                </div>
                <div class="form__item">
                    <label for="formQuestion" class="form__label">Психологический запрос (тема/проблема)*:</label>
                    <input type="text" id="formQuestion" class="form__input _req" name="question">
                </div>
                <div class="form__item">
                    <label for="formdescription" class="form__label">Укажите желаемое время консультации и формат:</label>
                    <textarea type="text" id="formDescription" class="form__input textarea" name="description"></textarea>
                </div>
                <div class="checkbox">
                    <input type="checkbox" name="agreement" class="checkbox__input  _req" id="formAgreement">
                    <label for="formAgreement" class="checkbox__label">Я даю своё согласие на обработку персональных данных</label>
                </div>
                <button type="submit" class="form__button">Отправить</button>
            </form>
        </div>
    </div>
    <script src="./mail.js"></script>
</body>
</html>