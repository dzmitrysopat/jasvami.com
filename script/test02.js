const questions = [
    {
        question: "Я напряжен и взволнован (взвинчен)",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "У меня ком в горле, и (или) я ощущаю сухость во рту",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я перегружен работой. Мне совсем не хватает времени",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я проглатываю пищу или забываю поесть",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я обдумываю свои идеи снова и снова; я меняю свои планы; мои мысли постоянно повторяются",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я чувствую себя одиноким, изолированным и непонятым",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я страдаю от физического недомогания; у меня болит голова, напряжены мышцы шеи, боли в спине, спазмы в желудке ",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я поглощен мыслями, измучен или обеспокоен",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Меня внезапно бросает то в жар, то в холод",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я забываю о встречах или делах, которые должен сделать или решить",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я легко могу заплакать",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я чувствую себя уставшим",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я крепко стискиваю зубы",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я не спокоен",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Мне тяжело дышать, и (или) у меня внезапно перехватывает дыхание",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я имею проблемы с пищеварением и с кишечником (боли, колики, расстройства или запоры)",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я взволнован, обеспокоен или смущен",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я легко пугаюсь; шум или шорох заставляет меня вздрагивать",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Мне необходимо более чем полчаса для того, чтобы уснуть",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я сбит столку; мои мысли спутаны; мне не хватает сосредоточенности, и я не могу сконцентрировать внимание",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "У меня усталый вид; мешки или круги под глазами",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я чувствую тяжесть на своих плечах",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я встревожен. Мне необходимо постоянно двигаться; я не могу устоять на одном месте",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Мне трудно контролировать свои поступки, эмоции, настроения или жесты",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    },
    {
        question: "Я напряжен",
        answers: ["Никогда", "Крайне редко", "Очень редко", "Редко", "Иногда", "Часто", "Очень часто", "Постоянно (ежедневно)"],
    }
];

const headerContainer = document.querySelector('#quiz-header');
const bodyContainer = document.querySelector('#test-body');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');
const progressContainer = document.querySelector('#progress');

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();

submitBtn.onclick = checkAnswer;

function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion(){
    // console.log('showQuestion');

    // Question
    const headerTemplate = `<h2 class="question">%question%</h2>`;
    const title = headerTemplate.replace('%question%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    // questionnumber
    const bodyTemplate = `<p class="number result">%number%</p>`;
    
    let number = `Вопрос ${questionIndex+1} из ${questions.length}`;
    console.log(number);

    const questionNumber = bodyTemplate.replace('%number%', number);

    bodyContainer.innerHTML = questionNumber;

    // progressBar
    let step = questionIndex+1;
    const progressTemplate = 
    `<progress max="%max%" value="%step%" id="progress"></progress>`;

    
    console.log(step);
    console.log(questions.length);

    progressContainer.value = step;
    progressContainer.max = questions.length;

    // Answers
    let answerNumber = 1;

    for (answerText of questions[questionIndex]['answers']){
        // console.log(answerNumber, answerText);
        const questionTemplate = 
            `<label class="label__input answer-item">
            <input value="%number%" type="radio" class="answer" name="answer">
            <span class="answer-description">%answer%</span>
        </label>`;

        // let answerHTML = questionTemplate.replace('%answer%', answerText);
        //    listContainer.innerHTML = listContainer.innerHTML + answerHTML;
        // or

        const answerHTML = questionTemplate
                                    .replace('%answer%', answerText)
                                    .replace('%number%', answerNumber);
        
        listContainer.innerHTML += answerHTML;
        answerNumber++;
    }
} 

function checkAnswer(){   
    // Находим выбранную радио кнопку
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    
    // Если ответ не выбран - ничего не делаем, выходим из функции
    if (!checkedRadio){
        submitBtn.blur();
        return;
    }

    // узнаем номер ответа пользователя

    const userAnswer = parseInt(checkedRadio.value);
    console.log(parseInt(checkedRadio.value));
    // Если ответ верный - увеличиваем счет
    // questions[questionIndex]['answers']
    // if (userAnswer === questions[questionIndex]['answers']){
        score = score + userAnswer;
    // }

    console.log('score = ', score);

    if (questionIndex !== questions.length - 1){
        console.log('Это не последний вопрос');
        questionIndex++;
        clearPage();
        showQuestion();
    } else {
        console.log('Это последний вопрос');
        clearPage();
        showResults();
    }
}

function showResults (){
    console.log('showResults start');
    console.log(score);

    const resultsTemplate = `
            <div class="results">
            <div class="result-comntainer">
            <h2 class="title">%title%</h2>
            </div>
            <h3 class="summary">%message%</h3>
            </div>
    `;

    let title, message;

    if (score <= 99){
        title = 'Ваш результат:';
        message = 'У Вас низкий уровень стресса!';
    } else if (score >= 100 && score <= 125){
        title = 'Ваш результат:';
        message = 'У Вас средний уровень стресса!';
    } else if (score >= 125){
        title = 'Ваш результат:';
        message = 'У Вас высокий уровень стресса!';
    }

    // Result
    // let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)

    listContainer.innerHTML = finalMessage;
    bodyContainer.innerHTML = '';
    progressContainer.hidden = true;

    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}