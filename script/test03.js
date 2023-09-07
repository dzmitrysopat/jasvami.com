const questions = [
    {
        question: "Я часто волнуюсь понапрасну",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Мне хочется, чтобы мои друзья подбадривали меня.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Я боюсь выглядеть глупцом.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Я беспокоюсь за свое будущее.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Внешний вид других куда лучше, чем мой.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Как жаль, что многие не понимают меня.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Чувствую, что не умею как следует разговаривать с людьми.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Люди ждут от меня очень многого.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Чувствую себя скованным.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Мне кажется, что со мной должна случиться какая-нибудь неприятность.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Меня волнует мысль о том, как люди относятся ко мне.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Я чувствую, что люди говорят обо мне за моей спиной.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Я не чувствую себя в безопасности.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Мне не с кем поделиться своими мыслями.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Люди не особенно интересуются моими достижениями.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
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

    // Question
    const headerTemplate = `<h2 class="question">%question%</h2>`;
    const title = headerTemplate.replace('%question%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

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
        score = score + (userAnswer - 1);
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

    if (score <= 10){
        title = 'Ваш результат: <br><br>  10 баллов и менее';
        message = 'У Вас завышенный уроввень самооценки';
    } else if (score >= 11 && score <= 29){
        title = 'Ваш результат: <br><br>  11-29 баллов';
        message = ' Средний, нормативный уровень реалистической оценки своих возможностей';
    } else if (score > 29){
        title = 'Ваш результат: <br><br> более 29 баллов';
        message = 'У Вас заниженный уровень самооценки';
    }

    // Result
    // let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)
                        // .replace('%result%', result);

    listContainer.innerHTML = finalMessage;
    bodyContainer.innerHTML = '';
    progressContainer.hidden = true;

    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}