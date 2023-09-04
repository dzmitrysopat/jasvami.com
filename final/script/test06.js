const questions = [
    {
        question: "Я испытываю напряжение, мне не по себе",
        answers: ["Совсем не испытываю", "Время от времени, иногда", "Часто", "Всё время"],
    },
    {
        question: "Я испытываю страх, кажется, что что-то ужасное может вот-вот случиться",
        answers: ["Совсем не испытываю", "Иногда, но это меня не беспокоит", "Да, это так, но страх не очень велик", "Определенно это так, и страх очень велик"],
    },
    {
        question: "Беспокойные мысли крутятся у меня в голове",
        answers: ["Только иногда", "Время от времени и не так часто", "Большую часть времени", "Постоянно"],
    },
    {
        question: "Я легко могу присесть и расслабиться",
        answers: ["Совсем не могу", "Лишь изредка, это так", "Наверно, это так", "Определённо, это так"],
    },
    {
        question: "Я испытываю внутреннее напряжение или дрожь",
        answers: ["Совсем не испытываю", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "Я испытываю неусидчивость, мне постоянно нужно двигаться",
        answers: ["Совсем не испытываю", "Лишь в некоторой степени, это так", "Наверно, это так", "Определённо, это так"],
    },
    {
        question: "У меня бывает внезапное чувство паники",
        answers: ["Совсем не бывает", "Не так уж часто", "Довольно часто", "Очень часто"],
    },
    {
        question: "То, что приносило мне большое удовольствие, и сейчас вызывает у меня такое же чувство",
        answers: ["Определенно, это так", "Наверное, это так", "Лишь в очень малой степени, это так", "Это совсем не так"],
    },
    {
        question: "Я способен рассмеяться и увидеть в том или ином событии смешное",
        answers: ["Определенно, это так", "Наверное, это так", "Лишь в очень малой степени, это так", "Совсем не способен"],
    },
    {
        question: "Я испытываю бодрость",
        answers: ["Практически всё время", "Иногда", "Очень редко", "Совсем не испытываю"],
    },
    {
        question: "Мне кажется, что я стал все делать очень медленно",
        answers: ["Совсем нет", "Иногда", "Часто", "Практически всё время"],
    },
    {
        question: "Я не слежу за своей внешностью",
        answers: ["Я слежу за собой так же, как и раньше", "может быть, я стал меньше уделять этому времени", "я не уделяю этому столько времени, сколько нужно", "определенно, это так"],
    },
    {
        question: "Я считаю, что мои дела (занятия, увлечения) могут принести мне чувство удовлетворения",
        answers: ["Совсем не испытываю", "Лишь в некоторой степени, это так", "Наверно, это так", "Определённо, это так"],
    },
    {
        question: "Я могу получить удовольствие от хорошей книги, радио- или телепрограммы",
        answers: ["Часто", "Иногда", "Редко", "Очень редко"],
    }
    
];

const headerContainer = document.querySelector('#quiz-header');
const bodyContainer = document.querySelector('#test-body');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');
const progressContainer = document.querySelector('#progress');

let score = 0;
let score1 = 0;
let score2 = 0;
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
    
    
    // Question
    const headerTemplate = `<h2 class="question">%question%</h2>`;
   
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

    progressContainer.value = step;
    progressContainer.max = questions.length;

    // Answers
    let answerNumber = 1;

    for (answerText of questions[questionIndex]['answers']){
        // console.log(answerNumber, answerText);
        const questionTemplate = 
            `<div>
                <label for="">
                    <input value="%number%" type="radio" class="answer" name="answer">
                    <span>%answer%</span>
                </label>
            </div>`;

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
        // score = score + (userAnswer - 1);
    // }

    if (questionIndex >=0 && questionIndex <= 6){
        score = score + (userAnswer - 1);
    } else if (questionIndex >=7 && questionIndex <= 13) {
        score1 = score1 + (userAnswer - 1);}
    console.log('score = ', score);
    console.log('score1 = ', score1);

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
                <h3 class="summary">%message%</h3>
                <h3 class="summary">%message1%</h3>
                </div>
                
                </div>
    `;

    let title, message, message1;

    if (score <= 7){
        title = 'Ваш результат:';
        message = 'У Вас не наблюдается достоверно выраженных симптомов тревоги';
    } else if (score >= 8 && score <= 10){
        title = 'Ваш результат:';
        message = 'У Вас наблюдается субклинически выраженная тревога';
    } else if (score >= 11){
        title = 'Ваш результат';
        message = 'У Вас клинически выраженная тревога';
    }

    if (score1 <= 7){
        title = 'Ваш результат';
        message1 = 'У Вас не наблюдается достоверно выраженных симптомов депрессии';
    } else if (score1 >= 8 && score1 <= 10){
        title = 'Ваш результат';
        message1 = 'У Вас наблюдается субклинически выраженная депрессия';
    } else if (score1 >= 11){
        title = 'Ваш результат';
        message1 = 'У Вас клинически выраженная депрессия';
    }

    // Result
    // let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)
                        .replace('%message1%', message1)
                        // .replace('%result%', result);

    headerContainer.innerHTML = finalMessage;
    bodyContainer.innerHTML = '';
    progressContainer.hidden = true;

    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}

