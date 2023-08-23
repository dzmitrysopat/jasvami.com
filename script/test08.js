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
    },
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
    const headerTemplate = `<h2 class="title">%title%</h2>`;
   
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);

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
            <h2 class="title">%title%</h2>
            <h3 class="summary">%message%</h3>
    `;

    let title, message;

    if (score1 > score && score1 > score2 && score2 > score){
        title = 'Ваш результат';
        message = 'У вас получилась формула ВДР. Вы обладаете развитым чувством ответственности, в меру импульсивны и не склонны к назиданиям и нравоучениям. Постарайтесь сохранить эти качества';
    } else if (score2 > score1 && score2 > score && score){
        title = 'Ваш результат';
        message = 'Вы получили формулу РДВ. Для вас характерны категоричность и самоуверенность. Кроме того, «Родитель» с детской непосредственностью режет «правду-матку», ни в чем не сомневаясь и не заботясь о последствиях. Поэтому таким людям желательно работать не с людьми, а с машинами, кульманом, этюдником и т. п.';
    } else if (score > score1 && score > score2){
        title = 'Ваш результат';
        message = 'На первом месте в формуле Д. Это вполне приемлемый вариант для научной работы. Но детская непосредственность хороша только до определенных пределов. Если она начинает мешать делу, то пора взять свои эмоции под контроль.';
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

