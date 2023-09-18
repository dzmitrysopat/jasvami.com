<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Уровень стресса</title>
    <link rel="stylesheet" href="../../style/style.css">
    <link rel="stylesheet" href="../../style/wrapper.css">
    <link rel="shortcut icon" href="../../img/icons/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <script src="../../script/wrapper.js"></script>
    <script src="../../script/itc-slider.js" defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
          // инициализация слайдера
          var slider = new ItcSimpleSlider('.itcss', {
            loop: true,
            autoplay: true,
            swipe: true
          });
        });
      </script>
</head>
    
<body class="body_hide">
    <div w3-include-html="../wrapper/header.php"></div>
    <main class="main" id="main">
        <article class="site-info element-animation  reverse" id="test-preview">
            <img src="../../img/tests/relationships-preview-animate.svg" alt="Моё фото" class="test-photo test-photo">
            <section class="psy-info">
                <h1 class="site-name">Определение ролей в отношениях</h1>
                <p class="information orange-border">
                    Согласно Э. Берну, обращаясь к другому человеку, мы выбираем одно из возможных состояний нашего «Я»:
                    <br><br>
                    состояние Родителя, Взрослого или Ребенка (Дитя).
                    <br><br>
                    Попробуйте оценить, как сочетаются эти три «Я» в вашем поведении. Для этого оцените приведенные утверждения в баллах от 0 до 10.
                </p>
                <a href="#" class="green-btn btn" id="testBtn" onclick="showTest()">Начать</a>
            </section>
        </article>

        <article class="hidden element-animation" id="interactiveQuiz">
            <section class="progress">
                <div id="test-body">
                    <p class="number result">Номер вопроса ...</p>
                </div>
                <progress max="%max%" value="%step%" id="progress"></progress>
            </section>
            <section class="quiz-header" id="quiz-header">
                <h2 class="question">Загружаем вопрос ...</h2>
            </section>

            <section class="quiz-list row-list" id="list">
                <div class="answer-item">
                    <label class="nowidth">
                        <input type="radio" class="answer" name="answer">
                       <span>Ответ ...</span> 
                    </label>
                </div>
                <div class="results">
                    <div class="result-comntainer">
                        <h2 class="title">%title%</h2>
                        <p class="result">%result%</p>
                    </div>
                    <h3 class="summary">%message%</h3>
                </div>
            </section>
            <button id="submit" class="green-btn btn test-btn">Далее</button>
        </article>
    </main>
    <div w3-include-html="../wrapper/footer.php"></div>
    <script>includeHTML();</script>
    <script src="../../script/test04.js"></script>
    <script src="../../script/script.js"></script>

</body>
</html>