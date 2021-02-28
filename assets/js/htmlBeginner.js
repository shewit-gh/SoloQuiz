
const questionNumber = document.querySelector(".question_number")
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("option"));

const progressbar = document.getElementById("progress")
const percentCount = document.getElementById("percentCount")


let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
// let questions = [];

let questions = [
    {
        question: "What does HTML stand for?",
        choice1: "Home Tool Markup Language",
        choice2: " Hyper Text Markup Language",
        choice3: " Hyperlinks and Text Markup Language",
        choice4: "How To Make Language",
        answer: 2
    },
    {
        question: "Choose the correct HTML element for the largest heading?",
        choice1: "<head>",
        choice2: "<heading>",
        choice3: "<h6&>",
        choice4: "<h1>",
        answer: 4
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        choice1: "<br>",
        choice2: "<break>",
        choice3: "<lb>",
        choice4: "<bm>",
        answer: 1
    },
    {
        question: "Choose the correct HTML element to define important text",
        choice1: "<important>",
        choice2: "<b>",
        choice3: "<strong>",
        choice4: "<i>",
        answer: 3
    },
    {
        question: " what is the difference in an opening tag and a closing tag?",
        choice1: "Opening tag has a / in front",
        choice2: "closeing tag has a / in front",
        choice3: "closeing tag has a / in at thr end",
        choice4: "ofcourse There is no difference",
        answer: 2
    }


];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    // questions = [...questions];
    console.log(questions);
    getNewQuestion();

}

function getNewQuestion() {
    questionCounter++;

    questionNumber.innerHTML = "Question " + questionCounter + " of " + MAX_QUESTIONS;


    const questionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
    questions.splice(questionIndex, 1);

    acceptingAnswer = true;

}



// console.log(availableQuestions); acceptingAnswer = true;

// selectAnswer.addEventListener('click', getResult)
// function getResult(element) {
//     const id = parseInt(element.id);
//     console.log(element.id)
//     if (id === currentQuestion.answer) {
//         element.classList.add("correct");
//     }
//     else {
//         console.log("answer is wrong")
//     }
// }

function next() {
    if (questions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // go to the end page
        return window.location.assign("../js../assets./results.html");
    }

    if (questionCounter === questions.length) {
        console.log("over")
    }
    else {
        setTimeout(() => {

            getNewQuestion();
        }, 1000);
    }
}

window.onload = function () {

    getNewQuestion();
}