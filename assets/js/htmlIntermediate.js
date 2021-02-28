
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
        question: "<input> is -",
        choice1: "a format tag",
        choice2: " an empty tag",
        choice3: " All of the above",
        choice4: "None of the above",
        answer: 2
    },
    {
        question: "Which of the following tag is used to make the underlined text?",
        choice1: "<i>",
        choice2: "<ul>",
        choice3: "<u>",
        choice4: "<pre>",
        answer: 3
    },
    {
        question: "Which of the following tag is used to add rows in the table?",
        choice1: "<td> and </td>",
        choice2: "<th> and </th>",
        choice3: "<tr> and </tr>",
        choice4: "None of the above",
        answer: 3
    },
    {
        question: "Which of the following attribute is used to provide a unique name to an element?",
        choice1: "class",
        choice2: "id",
        choice3: "type",
        choice4: "None of the above",
        answer: 2
    },
    {
        question: "Which of the following HTML tag is the special formatting tag?",
        choice1: "<p>",
        choice2: "<b>",
        choice3: "<pre>",
        choice4: "None of the above",
        answer: 3
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
        return window.location.href = "resultinter.html";
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