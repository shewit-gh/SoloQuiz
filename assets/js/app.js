const questionNumber = document.querySelector(".question_number")
const questionText = document.querySelector(".question")
const optionContainer = document.querySelector(".option_container")
const singleOption = document.querySelectorAll(".option")

let questionCounter = 0;
let currentQuestion;
let currentOPtion;
var option;
let availableQuestions = []
let availableOptions = []

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

    const optionLen = currentQuestion.options.length
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i)
    }

    let animationDelay = 0.2;

    for (let i = 0; i < optionLen; i++) {
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

        const index2 = availableOptions.indexOf(optionIndex);

        availableOptions.splice(index2, 1);

        // currentOption = optionIndex;
        // singleOption.innerHTML = currentQuestion.options[optionIndex];
        // optionContainer.appendChild(currentQuestion.options[optionIndex])

        option = document.createElement("div")
        option.innerHTML = currentQuestion.options[optionIndex]
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + "s";
        animationDelay = animationDelay + 0.2;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");
    }

    questionCounter++

}

function getResult(element) {
    const id = parseInt(element.id);
    if (id === currentQuestion.answer) {
        console.log("answer is correct")
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
        // for (let i = currentQuestion.options.length; i >= 0; i--) {
        //     availableOptions.pop(i)
        // }

        // availableOptions.length = 0
        // for (let i = 0; i < currentQuestion.options.length; i++) {
        //     optionContainer.removeChild(option)
        // }

        getNewQuestion()
    }
}

window.onload = function () {

    setavailableQuestions();
    getNewQuestion();
}