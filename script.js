const questions = [
  {
    question: "What is the full form of AIML?",
    options: ["Artificial Intelligence and Machine Learning", "Advanced Intelligence and Machine Learning", "Automated Intelligence and Machine Learning", "Augmented Intelligence and Machine Learning"],
    answer: 0
  },
  // add 9 more questions here...
];

let currentQuestion = 0;
let score = 0;
let timer = 20;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const timerElement = document.getElementById("timer");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

function displayQuestion() {
  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.innerHTML = "";
  questions[currentQuestion].options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => {
      checkAnswer(index);
    });
    optionsElement.appendChild(li);
  });
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    displayScore();
  } else {
    displayQuestion();
    timer = 20;
  }
}

function displayScore() {
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  scoreElement.textContent = `Your score: ${score} / ${questions.length}`;
}

function countdown() {
  timer--;
  timerElement.textContent = `${timer}s`;
  if (timer <= 0) {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
      displayScore();
    } else {
      displayQuestion();
      timer = 20;
    }
  }
  setTimeout(countdown, 1000);
}

displayQuestion();
countdown();

submitButton.addEventListener("click", () => {
  // handle submit button click
});