const questions = [
    {
        question: "Я несчастлив, занимаясь столькими вещами в одиночку",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Мне не с кем поговорить",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Для меня невыносимо быть таким одиноким",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Мне не хватает общения",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я чувствую, что никто действительно не понимает меня",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я часто ловлю себя на ожидании, что люди позвонят или напишут мне",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Нет никого, к кому я мог бы обратиться",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я сейчас больше ни с кем не близок",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Те, кто меня окружает, не разделяют мои интересы и идеи",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я чувствую себя покинутым",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я не способен раскрепощаться и общаться с теми, кто меня окружает",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я чувствую себя совершенно одиноким",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Мои социальные отношения и связи поверхностны",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я умираю от тоски по компании.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "В действительности никто как следует не знает меня",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я чувствую себя изолированным от других",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я несчастен оттого, что всеми отвергнут",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Мне трудно заводить друзей.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Я чувствую себя исключенным и изолированным другими.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "Люди вокруг меня, но не со мной.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
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
    const headerTemplate = ` <h2 class="question">%question%</h2>`;
    const title = headerTemplate.replace('%question%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    // questionnumber
    const bodyTemplate = `<p class="number result">%number%</p>`;
    
    let number = `Вопрос ${questionIndex+1} из ${questions.length}`;
    // console.log(number);

    const questionNumber = bodyTemplate.replace('%number%', number);

    bodyContainer.innerHTML = questionNumber;

    // progressBar
    let step = questionIndex+1;
    const progressTemplate = 
    `<progress max="%max%" value="%step%" id="progress"></progress>`;

    
    // console.log(step);
    // console.log(questions.length);

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
    // console.log(parseInt(checkedRadio.value));
    // Если ответ верный - увеличиваем счет
    // questions[questionIndex]['answers']
    // if (userAnswer === questions[questionIndex]['answers']){
        score = score + (userAnswer - 1);
    // }

    // console.log('score = ', score);

    if (questionIndex !== questions.length - 1){
        // console.log('Это не последний вопрос');
        questionIndex++;
        clearPage();
        showQuestion();
    } else {
        // console.log('Это последний вопрос');
        clearPage();
        showResults();
    }
}

function showResults (){
    // console.log('showResults start');
    // console.log(score);

    const resultsTemplate = `
            <div class="results">
            <div class="result-comntainer">
            <h2 class="title">%title%</h2>
            <p class="result">%result%</p>
            </div>
            <h3 class="summary">%message%</h3>
            </div>
    `;

    let title, message, result;

    if (score >= 0 && score <= 20){
        title = 'Ваш результат:';
        result = 'от 0 до 20 баллов'
        message = 'У Вас низкая степень изолированности от людей';
    } else if (score >= 21 && score <= 40){
        title = 'Ваш результат:';
        result = 'от 21 до 40 баллов'
        message = 'У Вас средняя степень социальной изолированности';
    } else if (score > 40){
        title = 'Ваш результат:';
        result = 'более 40 баллов'
        message = 'У Вас высокая степень социальной закрытости';
    }

    // Result
    // let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)
                        .replace('%result%', result);

    listContainer.innerHTML = finalMessage;
    bodyContainer.innerHTML = '';
    progressContainer.hidden = true;

    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}