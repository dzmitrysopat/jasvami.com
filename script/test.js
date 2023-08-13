const questions = [
    {
        question: "Что для вас важнее в игре?",
        answers: ["Развлечение", "Победа"],
        correct: 2,
    },

    {
        question: "Что вы предпочитаете в общем разговоре?",
        answers: ["Проявлять инициативу, предлагать что-либо", "Слушать и критиковать то, что предлагают другие"],
        correct: 1,
    },
    
    {
        question: "Способны ли вы выдерживать критику, не ввязываться в частные споры, не оправдываться?",
        answers: ["Да", "Нет"],
        correct: 1,
    },
    
    {
        question: "Нравится ли вам, когда вас хвалят прилюдно?",
        answers: ["Нет", "Да"],
        correct: 2,
    },
    
    {
        question: "Отстаиваете ли вы свое мнение, если обстоятельства (мнение большинства) против вас?",
        answers: ["Нет", "Да"],
        correct: 2,
    },            
    
    {
        question: "В компании, в общем деле вы всегда выступаете заводилой, придумываете что-либо такое, что интересно другим?",
        answers: ["Да", "Нет"],
        correct: 1,
    },

    {
        question: "Умеете ли вы скрывать свое настроение от окружающих?",
        answers: ["Нет", "Да"],
        correct: 2,
    },

    {
        question: "Всегда ли вы немедленно и безропотно делаете то, что вам говорят старшие?",
        answers: ["Да", "Нет"],
        correct: 2,
    },

    {
        question: "Удается ли вам в разговоре, дискуссии убедить, привлечь на свою сторону тех, кто раньше был с вами не согласен?",
        answers: ["Да", "Нет"],
        correct: 1,
    },

    {
        question: "Нравится ли вам учить (поучать, воспитывать, обучать, давать советы) других?",
        answers: ["Да", "Нет"],
        correct: 1,
    },
];

const headerContainer = document.querySelector('#quiz-header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();

submitBtn.onclick = checkAnswer;

const openInNewTab = (url) => {
    window.open(url, target="_self");
  }
  const btn = document.getElementById("submit");
  
//   btn.addEventListener("click", () => {
//     openInNewTab("../../tests.html");
//   });

function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion(){
    console.log('showQuestion');


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

    // Если ответ верный - увеличиваем счет
    questions[questionIndex]['correct']
    if (userAnswer === questions[questionIndex]['correct']){
        score++;
    }

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
            <p class="result">%result%</p>
    `;

    let title, message;

    if (score === 7 || score === 8 || score === 9 || score === questions.length ){
        title = 'Вас можно поздравить! 😎';
        message = 'Вы неоспоримый лидер! 💪';
    } else if (score === 6 || score === 5 || score === 4){
        title = 'Неплохой результат! 😉';
        message = 'У Вас есть все задатки настоящего лидера! Однако есть куда стремиться! Вперед! Дерзайте 👍';
    } else if (score === 3 || score === 2 || score === 1){
        title = 'Стоит постараться!';
        message = 'У Вас низкий уровень лидерский качеств. Для Вас уготована другая, более крутая роль 😇';
    }

    // Result
    let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)
                        .replace('%result%', result);

    headerContainer.innerHTML = finalMessage;

    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}