const questions = [
    {
        question: "1. То, что приносило мне большое удовольствие, и сейчас вызывает у меня такое же чувство",
        answers: ["Определенно, это так", "Наверное, это так", "Лишь в очень малой степени, это так", "Это совсем не так"],
    },
    {
        question: "2. Я способен рассмеяться и увидеть в том или ином событии смешное",
        answers: ["Определенно, это так", "Наверное, это так", "Лишь в очень малой степени, это так", "Совсем не способен"],
    },
    {
        question: "3. Я испытываю бодрость",
        answers: ["Практически всё время", "Иногда", "Очень редко", "Совсем не испытываю"],
    },
    {
        question: "4. Мне кажется, что я стал все делать очень медленно",
        answers: ["Совсем нет", "Иногда", "Часто", "Практически всё время"],
    },
    {
        question: "5. Я не слежу за своей внешностью",
        answers: ["Я слежу за собой так же, как и раньше", "может быть, я стал меньше уделять этому времени", "я не уделяю этому столько времени, сколько нужно", "определенно, это так"],
    },
    {
        question: "6. Я считаю, что мои дела (занятия, увлечения) могут принести мне чувство удовлетворения",
        answers: ["Совсем не испытываю", "Лишь в некоторой степени, это так", "Наверно, это так", "Определённо, это так"],
    },
    {
        question: "7. Я могу получить удовольствие от хорошей книги, радио- или телепрограммы",
        answers: ["Часто", "Иногда", "Редко", "Очень редко"],
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
    const headerTemplate = ` <h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
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

    if (score >= 0 && score <= 7){
        title = 'Норма! 😎';
        message = 'У Вас наблюдается отсутствие достоверно выраженных симптомов депрессии 💪';
    } else if (score >= 8 && score <= 10){
        title = 'Стоит обратить внимание!';
        message = 'У Вас наблюдается субклинически выраженная депрессия';
    } else if (score > 10){
        title = 'Результаты неутешительные:(';
        message = 'Кажется, у Вас клинически выраженная депрессия. Обратитесь к специалисту за помощью!';
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