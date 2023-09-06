const questions = [
    {
        question: "1. Я несчастлив, занимаясь столькими вещами в одиночку.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "2. Мне не с кем поговорить.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "3. Для меня невыносимо быть таким одиноким.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "4. Мне не хватает общения.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "5. Я чувствую, что никто действительно не понимает меня.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "6. Я часто ловлю себя на ожидании, что люди позвонят или напишут мне.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "7. Нет никого, к кому я мог бы обратиться.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "8. Я сейчас больше ни с кем не близок.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "9. Те, кто меня окружает, не разделяют мои интересы и идеи.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "10. Я чувствую себя покинутым.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "11. Я не способен раскрепощаться и общаться с теми, кто меня окружает.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "12. Я чувствую себя совершенно одиноким.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "13. Мои социальные отношения и связи поверхностны.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "14. Я умираю от тоски по компании.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "15. В действительности никто как следует не знает меня.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "16. Я чувствую себя изолированным от других.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "17. Я несчастен оттого, что всеми отвергнут.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "18. Мне трудно заводить друзей.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "19. Я чувствую себя исключенным и изолированным другими.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    },
    {
        question: "20. Люди вокруг меня, но не со мной.",
        answers: ["Никогда", "Редко", "Иногда", "Часто"],
    }
];

const headerContainer = document.querySelector('#quiz-header');
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

    if (score >= 0 && score <= 20){
        title = 'Всё хорошо! 😎';
        message = 'У Вас низкая степень изолированности от людей 💪';
    } else if (score >= 21 && score <= 40){
        title = 'Стоит обратить внимание!';
        message = 'У Вас средняя степень социальной изолированности';
    } else if (score > 40){
        title = 'Результаты неутешительные:(';
        message = 'У Вас высокая степень социальной закрытости';
    }

    // Result
    // let result = `${score} из ${questions.length}`;

    const finalMessage = resultsTemplate
                        .replace('%title%', title)
                        .replace('%message%', message)
                        // .replace('%result%', result);

    headerContainer.innerHTML = finalMessage;

    submitBtn.blur();
    submitBtn.innerText = 'Попробовать еще раз'
    submitBtn.onclick = () => history.go();
}