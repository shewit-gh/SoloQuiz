
const questionNumber = document.querySelector(".question_number")
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("option"));
// const scoreText = document.getElementById('score');
// const progressbar = document.getElementById("progress")
// const percentCount = document.getElementById("percentCount")

const progressText = document.getElementById("progressText");
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");





let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
// let availableQuestions = [];

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
    if (questions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // go to the end page
        // return window.location.assign("../js./assets/results.html");
        return window.location.href = "results.html";
    }
    questionCounter++;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`


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

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswer) { return };

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        // console.log(selectedAnswer);
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;

};






window.onload = function () {

    getNewQuestion();
}