
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
        question: "What does CSS stand for?",
        choice1: "creative Style Scheets",
        choice2: " computer style sheets ",
        choice3: " colorful style sheets",
        choice4: "cascading style sheets",
        answer: 4
    },
    {
        question: "Select the property used to create space between the element’s border and inner content? ",
        choice1: " border",
        choice2: "spacing",
        choice3: "padding",
        choice4: "margin",
        answer: 3
    },
    {
        question: "In CSS, what is the correct option to select all the tags on a page?",
        choice1: "  p { }",
        choice2: "#p { }",
        choice3: ".p { } ",
        choice4: " <p> { }",
        answer: 1
    },
    {
        question: "In CSS,Select the property used to set the spacing in between lines of text?",
        choice1: "letter-spacing",
        choice2: "spacing",
        choice3: "line-height",
        choice4: "line-spacing",
        answer: 3
    },
    {
        question: " If we want define style for an unique element, then which css selector will we use ?",
        choice1: "Id",
        choice2: " class",
        choice3: "text",
        choice4: "name",
        answer: 1
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
        return window.location.href = "cssresultB.html";
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