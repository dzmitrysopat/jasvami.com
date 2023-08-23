const questions = [
    {
        question: "1. Я испытываю напряжение, мне не по себе",
        answers: ["Совсем не испытываю", "Время от времени, иногда", "Часто", "Всё время"],
    },
    {
        question: "2. Я испытываю страх, кажется, что что-то ужасное может вот-вот случиться",
        answers: ["Совсем не испытываю", "Иногда, но это меня не беспокоит", "Да, это так, но страх не очень велик", "Определенно это так, и страх очень велик"],
    },
    {
        question: "3. Беспокойные мысли крутятся у меня в голове",
        answers: ["Только иногда", "Время от времени и не так часто", "Большую часть времени", "Постоянно"],
    },
    {
        question: "4. Я легко могу присесть и расслабиться",
        answers: ["Совсем не могу", "Лишь изредка, это так", "Наверно, это так", "Определённо, это так"],
    },
    {
        question: "5. Я испытываю внутреннее напряжение или дрожь",
        answers: ["Совсем не испытываю", "Иногда", "Часто", "Очень часто"],
    },
    {
        question: "6. Я испытываю неусидчивость, мне постоянно нужно двигаться",
        answers: ["Совсем не испытываю", "Лишь в некоторой степени, это так", "Наверно, это так", "Определённо, это так"],
    },
    {
        question: "7. У меня бывает внезапное чувство паники",
        answers: ["Совсем не бывает", "Не так уж часто", "Довольно часто", "Очень часто"],
    }
];

const headerContainer = document.querySelector('#quiz-header');
const bodyContainer = document.querySelector('#test-body');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

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
        message = 'У Вас наблюдается отсутствие достоверно выраженных симптомов тревоги 💪';
    } else if (score >= 8 && score <= 10){
        title = 'Стоит обратить внимание!';
        message = 'У Вас наблюдается субклинически выраженная тревога';
    } else if (score > 10){
        title = 'Результаты неутешительные:(';
        message = 'Кажется, у Вас клинически выраженная тревога. Обратитесь к специалисту за помощью!';
    }

    // Result
    // let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)
                        // .replace('%result%', result);

    headerContainer.innerHTML = finalMessage;
    bodyContainer.innerHTML = '';

    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}