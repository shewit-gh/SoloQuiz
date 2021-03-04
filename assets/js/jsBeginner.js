
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
        question: "How many glyphs does bootstrap include?",
        choice1: "369",
        choice2: " 360 ",
        choice3: " 260",
        choice4: "100",
        answer: 3
    },
    {
        question: "  Which of the following occurs after fixed positioned is added to the element?",
        choice1: " affix.bs.affix",
        choice2: "affixed.bs.affix",
        choice3: "affix-top.bs.affix",
        choice4: "affixed-top.bs.affix",
        answer: 2
    },
    {
        question: "Which of the following allows an element to lock to an area on the page?",
        choice1: " affix",
        choice2: "alert",
        choice3: "popover",
        choice4: "tooltip",
        answer: 1
    },
    {
        question: "Which of the following makes the button appear pressed?",
        choice1: ".btn-link",
        choice2: ".disabled",
        choice3: ".active",
        choice4: ".btn-block",
        answer: 3
    },
    {
        question: " What adds slides to carousel?",
        choice1: " .carousel",
        choice2: " .carousel-inner",
        choice3: ".item",
        choice4: ".carousel-indicators",
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
        return window.location.href = "jsResBegin.html";
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