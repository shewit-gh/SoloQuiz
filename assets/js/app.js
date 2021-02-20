
const questionNumber = document.querySelector(".question_number")
const questionText = document.querySelector(".question")
const optionContainer = document.querySelector(".option_container")
const selectAnswer = document.querySelector(".option")
const singleOption1 = document.querySelector(".option0")
const singleOption2 = document.querySelector(".option1")
const singleOption3 = document.querySelector(".option2")
const singleOption4 = document.querySelector(".option3")

let questionCounter = 0;
let currentQuestion;
let currentOPtion;
var option;
let availableQuestions = [];
let availableOptions = [];

function setavailableQuestions() {
    const totalQuestion = htmlBeginner.length
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(htmlBeginner[i])
    }
}
function getNewQuestion() {
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + htmlBeginner.length;

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];


    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.question;

    const index1 = availableQuestions.indexOf(questionIndex);

    availableQuestions.splice(index1, 1);

    singleOption1.innerHTML = currentQuestion.options[0];

    singleOption2.innerHTML = currentQuestion.options[1];

    singleOption3.innerHTML = currentQuestion.options[2];

    singleOption4.innerHTML = currentQuestion.options[3];

    questionCounter++

}
selectAnswer.addEventListener('click', getResult)
function getResult(element) {
    const id = parseInt(element.id);
    console.log(element.id)
    if (id === currentQuestion.answer) {
        element.classList.add("correct");
    }
    else {
        console.log("answer is wrong")
    }
}

function next() {
    if (questionCounter === htmlBeginner.length) {
        console.log("over")
    }
    else {
        getNewQuestion()
    }
}

window.onload = function () {

    setavailableQuestions();
    getNewQuestion();
}