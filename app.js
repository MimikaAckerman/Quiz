const quizData = [
  {
    question: "cual es el titan mas grande de Shingeki no Kyojin?",
    a: "Titan de ataque",
    b: "Titan colosal",
    c: "Titan acorazado",
    d: "Titan hembra",
    correct: "b",
  },
  {
    question: "como se llama el protagonista de Shingeki no Kyojin?",
    a: "Mikasa",
    b: "eren",
    c: "armin",
    d: "historia",
    correct: "b",
  },
  {
    question: "quien es el pequeño de los personajes en Shingeki no Kyojin?",
    a: "levi ackerman",
    b: "armin",
    c: "berthord",
    d: "historia",
    correct: "a",
  },
  {
    question: "quien es la titan hembra?",
    a: "annie",
    b: "mikasa",
    c: "armin",
    d: "ninguno",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswer = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElements.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
  } else {
    quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
        <button onclick="history.go(0)">Play Again</button> `;
  }
});
