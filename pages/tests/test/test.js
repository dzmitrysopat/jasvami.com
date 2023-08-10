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
    for (answerText of questions[questionIndex]['answers']){
        console.log(answerText);

        const questionTemplate = 
            `<li>
                <label for="">
                    <input type="radio" class="answer" name="answer">
                    <span>%answer%</span>
                </label>
            </li>`;

           const answerHTML = questionTemplate.replace('%answer%', answerText);
        //    listContainer.innerHTML = listContainer.innerHTML + answerHTML;
        // or
        listContainer.innerHTML += answerHTML;

    }


} 