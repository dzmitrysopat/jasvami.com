const questions = [
    {
        question: "1. Я часто волнуюсь понапрасну",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "2. Мне хочется, чтобы мои друзья подбадривали меня.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "3. Я боюсь выглядеть глупцом.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "4. Я беспокоюсь за свое будущее.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "5. Внешний вид других куда лучше, чем мой.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "6. Как жаль, что многие не понимают меня.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "7. Чувствую, что не умею как следует разговаривать с людьми.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "8. Люди ждут от меня очень многого.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "9. Чувствую себя скованным.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "10. Мне кажется, что со мной должна случиться какая-нибудь неприятность.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "11. Меня волнует мысль о том, как люди относятся ко мне.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "12. Я чувствую, что люди говорят обо мне за моей спиной.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "13. Я не чувствую себя в безопасности.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "14. Мне не с кем поделиться своими мыслями.",
        answers: ["Никогда", "Редко", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "15. Люди не особенно интересуются моими достижениями.",
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
    const headerTemplate = ` <h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    // Answers
    let answerNumber = 1;

    for (answerText of questions[questionIndex]['answers']){
        // console.log(answerNumber, answerText);
        const questionTemplate = 
            `<li>
                <label for="">
                    <input value="%number%" type="radio" class="answer" name="answer">
                    <span>%answer%</span>
                </label>
            </li>`;

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
            <h2 class="title">%title%</h2>
            <h3 class="summary">%message%</h3>
    `;

    let title, message;

    if (score <= 10){
        title = 'Ваш результат: 10 баллов и менее';
        message = 'У Вас завышенный уроввень самооценки';
    } else if (score >= 11 && score <= 29){
        title = 'Ваш результат: 11-29 баллов';
        message = ' Средний, нормативный уровень реалистической оценки своих возможностей';
    } else if (score > 29){
        title = 'Ваш результат: более 29 баллов';
        message = 'У Вас заниженный уровень самооценки';
    }

    // Result
    // let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)
                        // .replace('%result%', result);

    headerContainer.innerHTML = finalMessage;
    bodyContainer.innerHTML = '';
    progressContainer.hidden = true;

    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}