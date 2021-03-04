
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
        question: "Why do JavaScript and Java have similar name?",
        choice1: "JavaScript is a stripped-down version of Java",
        choice2: " JavaScript's syntax is loosely based on Java's",
        choice3: " They both originated on the island of Java",
        choice4: "None of the above",
        answer: 2
    },
    {
        question: " When a user views a page containing a JavaScript program, which machine actually executes the script?",
        choice1: " The User's machine running a Web browser",
        choice2: " The Web server",
        choice3: "A central machine deep within Netscape's corporate offices",
        choice4: " None of the above",
        answer: 1
    },
    {
        question: "______ JavaScript is also called client-side JavaScript.",
        choice1: " Microsoft",
        choice2: "Navigator",
        choice3: "LiveWire",
        choice4: "Native",
        answer: 2
    },
    {
        question: " What are variables used for in JavaScript Programs?",
        choice1: "Storing numbers, dates, or other values",
        choice2: "Varying randomly",
        choice3: "Causing high-school algebra flashbacks",
        choice4: "None of the above",
        answer: 1
    },
    {
        question: "What should appear at the very end of your JavaScript?",
        choice1: " The </script>",
        choice2: " The <script>",
        choice3: "The END statement",
        choice4: "None of the above",
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