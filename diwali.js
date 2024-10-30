const questions = [
    {
        question: "Diwali is also known as the festival of?",
        options: ["Lights", "Colors", "Flowers", "Music"],
        answer: 0
    },
    {
        question: "What do people traditionally light during Diwali?",
        options: ["Candles", "Fireworks", "Diyas", "Lamps"],
        answer: 2
    },
    {
        question: "Which god is worshipped during Diwali?",
        options: ["Ganesha", "Krishna", "Lakshmi", "Hanuman"],
        answer: 2
    },
    {
        question: "What is the significance of Diwali?",
        options: ["Victory of light over darkness", "Harvest festival", "New Year", "Rainy season"],
        answer: 0
    },
    {
        question: "Which sweet is commonly made during Diwali?",
        options: ["Ladoo", "Pizza", "Burger", "Ice Cream"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("hidden");
    resultElement.classList.add("hidden");
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctIndex) {
        score++;
    }
    const buttons = optionsElement.querySelectorAll("button");
    buttons.forEach((button, index) => {
        button.disabled = true; // Disable all buttons after selection
        if (index === correctIndex) {
            button.style.backgroundColor = 'green'; // Correct answer
        } 
    });
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add("hidden");
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.innerText = "";
    optionsElement.innerHTML = "";
    resultElement.classList.remove("hidden");
    scoreElement.innerText = `${score} / ${questions.length}`;
    nextButton.classList.add("hidden");
}

restartButton.addEventListener("click", startQuiz);

startQuiz();
window.onload = function() {
    const leftCurtain = document.getElementById('curtain-left');
    const rightCurtain = document.getElementById('curtain-right');

    // Start the curtain opening animation
    leftCurtain.style.transform = 'translateX(0)'; // Move left curtain to view
    rightCurtain.style.transform = 'translateX(0)'; // Move right curtain to view

    // Remove the curtains after animation
    setTimeout(() => {
        leftCurtain.style.display = 'none';
        rightCurtain.style.display = 'none';
    }, 1000); // Match this with your CSS transition time
};
