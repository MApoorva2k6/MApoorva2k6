const questions = [
    {
        question: "What is the output of 'print(2 + 3)' in Python?",
        choices: ["A. 5", "B. 23", "C. 6", "D. 2 + 3"],
        correctAnswer: "A"
    },
    {
        question: "Which keyword is used to define a function in Python?",
        choices: ["A. def", "B. function", "C. func", "D. define"],
        correctAnswer: "A"
    },
    {
        question: "In Python, which data type is ordered and immutable?",
        choices: ["A. List", "B. Tuple", "C. Dictionary", "D. Set"],
        correctAnswer: "B"
    },
    {
        question: "What is the Ethereum blockchain's native cryptocurrency?",
        choices: ["A. Bitcoin", "B. Ether", "C. Litecoin", "D. Ripple"],
        correctAnswer: "B"
    },
    {
        question: "Which Python library is commonly used for interacting with Ethereum smart contracts?",
        choices: ["A. pandas", "B. web3.py", "C. numpy", "D. matplotlib"],
        correctAnswer: "B"
    },
    {
        question: "What is the most common programming language for smart contract development on Ethereum?",
        choices: ["A. Java", "B. Solidity", "C. Python", "D. C++"],
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a Web3.js method used to send a transaction on Ethereum?",
        choices: ["A. eth.getBalance", "B. eth.getTransaction", "C. eth.sendTransaction", "D. web3.connect"],
        correctAnswer: "C"
    },
    {
        question: "What does JSON stand for?",
        choices: ["A. JavaScript Object Notation", "B. Java Server Object Notation", "C. JavaScript Oriented Notation", "D. Java Serialized Object Notation"],
        correctAnswer: "A"
    },
    {
        question: "In Python, which module is used to work with regular expressions?",
        choices: ["A. re", "B. regex", "C. string", "D. match"],
        correctAnswer: "A"
    },
    {
        question: "What is the result of '2 ** 3' in Python?",
        choices: ["A. 6", "B. 8", "C. 2", "D. 23"],
        correctAnswer: "B"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;

const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const resultText = document.getElementById("result");

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;

    choicesList.innerHTML = "";
    question.choices.forEach(choice => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="radio" name="choice" value="${choice.charAt(0)}"> ${choice}`;
        choicesList.appendChild(listItem);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) return;

    const userAnswer = selectedChoice.value;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    attempts++;

    if (attempts >= 3) {
        redirectToJoinPage("You have exhausted your quiz attempts.");
        return;
    }

    const percentageScore = (score / questions.length) * 100;

    if (percentageScore >= 80) {
        questionText.textContent = "Quiz Completed";
        choicesList.style.display = "none";
        nextButton.style.display = "none";

        resultText.textContent = `Your Score: ${score} out of ${questions.length}`;
    } else {
        redirectToJoinPage("Unfortunately, you are not selected due to a low score.");
    }
}

function redirectToJoinPage(message) {
    // Include the candidate's score in the message
    const scoreMessage = `Your Score: ${score} out of ${questions.length}`;
    const fullMessage = `${message}\n${scoreMessage}`;

    // Display a pop-up message with the score
    alert(fullMessage);

    // Redirect to join.html
    window.location.href = "join.html";
}

nextButton.addEventListener("click", checkAnswer);
showQuestion();
