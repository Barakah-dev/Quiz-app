const questions = [
  {
    question: "What are the three bones that, together, transmit sound to the inner ear?",
    answers:[
      {text: "Auricle, eardrum,and iris", correct: false},
      {text: "Malleus, incus, and stapes", correct: true},
      {text: "Cochles, epiglotis, and incus", correct: false},
      {text: "Duodenum, jejunum, and ileum", correct: false}
    ]
  },
  {
    question: "The period of contraction of the ventricles of the heart is known as:",
    answers:[
      {text: "Diastole", correct: false},
      {text: "Cardiac cycle", correct: false},
      {text: "Systole", correct: true},
      {text: "Cardiac output", correct: false}
    ]
  },
  {
    question: "The inner surface of every blood vessel is lined by a thin layer of cells known as the:",
    answers:[
      {text: "Arteriole", correct: false},
      {text: "Venules", correct: false},
      {text: "Endothelium", correct: true},
      {text: "Veins", correct: false}
    ]
  },
  {
    question: "How many bones are present in a human wrist?",
    answers:[
      {text: "12", correct: false},
      {text: "32", correct: false},
      {text: "4", correct: false},
      {text: "8", correct: true}
    ]
  },
  {
    question: "Which of these is the principal muscle of respiration?",
    answers:[
      {text: "Cardiac muscle", correct: false},
      {text: "cilia", correct: false},
      {text: "diaphragm", correct: true},
      {text: "flagella", correct: false}
    ]
  }
];

const questionElement = document.getElementById('question');
const questionNumElement = document.getElementById('question-num');
const answerButtons = document.getElementById('answer-btns');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  // questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  questionElement.innerHTML = currentQuestion.question;
  questionNumElement.innerHTML = '<i class="fa-solid fa-circle-question"></i>' + questionNo + "/ " + questions.length;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');    
    button.classList.add('btn');
    button.innerHTML = answer.text;
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', clickAnswer);
  })
}

function resetState() {
  nextButton.style.display = "none"
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function clickAnswer(e) {
  let clickedAnswer = e.target;
  // console.log(clickedAnswer);

  const isCorrect = clickedAnswer.dataset.correct === 'true';
  // console.log(isCorrect);
  if (isCorrect) {
    clickedAnswer.classList.add('correct');
    score++;
  } else {
    clickedAnswer.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = 'true'
  })
  nextButton.style.display = 'block';
  // prevButton.style.display = 'block';
}

function showScore() {
  resetState();

  if (score == questions.length) {
    questionElement.innerHTML = `Congratulations champion!
    Your score is ${score} out of ${questions.length}`;
  } else if (score > questions.length / 2 && score < questions.length) {
    questionElement.innerHTML = `You passed! Your score is ${score} out of ${questions.length}`;
  } else {
    questionElement.innerHTML = `You failed! Your score is ${score} out of ${questions.length}. Please retake the quiz.`;
  }
  nextButton.innerHTML = 'Play again';
  nextButton.style.display = "block";
  questionNumElement.style.display = "none";
}




function nextButtonClick() {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
      showQuestion();
    } else{
      showScore();
    }
  } else {
    startQuiz();
  }
}

startQuiz();
