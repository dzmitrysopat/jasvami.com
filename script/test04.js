const questions = [
    {
        question: "Мне порой не хватает выдержки",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Я иногда преувеличиваю свою роль в каких-либо событиях",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Бывает, что мне хочется подурачиться, как маленькому",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Нередко я поступаю не как надо, а как хочется",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Как и многие люди, я бываю обидчив",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Я увлекающийся человек",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Бывает, что я не уступаю в споре лишь потому, что не хочу уступать",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Если мои желания мешают мне, то я умею их подавлять",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Меня провести нелегко",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Думаю, что я правильно понимаю все происходящие события",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Принимая решение, я стараюсь продумать его последствия",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Мне удается видеть в людях больше, чем они говорят о себе",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Мой основной критерий оценки человека - объективность",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Правила оправданы лишь до тех пор, пока они полезны",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Родители, как более зрелые люди, должны устраивать семейную жизнь своих детей",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Мне бы понравилось быть воспитателем",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Каждый должен выполнять свой долг",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Младшее поколение должно учиться у старших, как ему следует жить",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Дети безусловно должны следовать указаниям родителей",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Мои взгляды непоколебимы",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
    },
    {
        question: "Люди должны соблюдать правила независимо от обстоятельств",
        answers: [0,1,2,3,4,5,6,7,8,9,10],
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
    const headerTemplate = `<h2 class="title">%title%</h2>`;
   
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
        title = 'Ваши результаты';
        message = 'У Вас высокий уровень лидерства';
    } else if (score === 6 || score === 5 || score === 4){
        title = 'Ваши результаты';
        message = 'У Вас средний уровень лидерства';
    } else if (score === 3 || score === 2 || score === 1){
        title = 'Ваши результаты';
        message = 'У Вас низкий уровень лидерства';
    }

    // Result
    let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)
                        .replace('%result%', result);

    headerContainer.innerHTML = finalMessage;
    bodyContainer.innerHTML = '';
    progressContainer.hidden = true;


    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}


