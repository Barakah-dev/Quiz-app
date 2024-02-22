//QUIZ PAGE

//Mobile nav
const body = document.querySelector('body');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', () => {
  nav.classList.add('toggle');
  console.log('open');
})

body.addEventListener('click', (e) => {
  let clickedElement = e.target;
  console.log('close');

  if (clickedElement.classList.contains('menu-close') || !clickedElement.classList.contains('menu-open')) {
    nav.classList.remove('toggle'); 
  }
});


//Quiz body
const questions = [
  {
    question: "What are the three bones that, together, transmit sound to the inner ear?",
    answers:[
      {text: "Auricle, eardrum,and iris", correct: false},
      {text: "Malleus, incus, and stapes", correct: true},
      {text: "Cochles, epiglotis, and incus", correct: false},
      {text: "Duodenum, jejunum, and ileum", correct: false}
    ],
    explanation: "Malleus, incus, and stapes are also known as the auditory ossicles, they transmit vibrations caused by sound waves from the eardrum membrane to the liquid of inner ear"
  },
  {
    question: "The period of contraction of the ventricles of the heart is known as:",
    answers:[
      {text: "Diastole", correct: false},
      {text: "Cardiac cycle", correct: false},
      {text: "Systole", correct: true},
      {text: "Cardiac output", correct: false}
    ],
    explanation: "Systole is a period of contraction of the ventricles of the heart that occurs between the first and second heart sounds of the cardiac cycle"
  },
  {
    question: "In a human, the left lung has two of these, but the right lung has three. What are they?",
    answers:[
      {text: "Lobes", correct: true},
      {text: "Muscles", correct: false},
      {text: "Fissures", correct: false},
      {text: "Pleura", correct: false}
    ],
    explanation: "The right lung has three major lobes while the left lung, which is slightly smaller due to the asymmetrical position of the heart has two lobes"
  },
  {
    question: "How many bones are present in a human wrist?",
    answers:[
      {text: "12", correct: false},
      {text: "32", correct: false},
      {text: "4", correct: false},
      {text: "8", correct: true}
    ],
    explanation: "The human wrist consists of eight small bones, which are arranged in two rows of four each"
  },
  {
    question: "Which of these is the principal muscle of respiration?",
    answers:[
      {text: "Cardiac muscle", correct: false},
      {text: "cilia", correct: false},
      {text: "diaphragm", correct: true},
      {text: "flagella", correct: false}
    ],
    explanation: "The diaphragm is the principal muscle of respiration. It is a dome-shaped, muscular, and membranous structure that separates the thoracic and the abdominal cavities in mammals."
  }
];

const questionElement = document.getElementById('question');
const questionNumElement = document.getElementById('question-num');
const answerButtons = document.getElementById('answer-btns');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const explanationsDiv = document.getElementById('explanation-div');
const explanationsElement = document.getElementById('explanations');

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
  questionNumElement.innerHTML = '<i class="fa-solid fa-circle-question"></i>' + ' ' + questionNo + "/ " + questions.length;
  questionElement.innerHTML = currentQuestion.question;

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
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  explanationsDiv.style.display = "none";
}

function showExplanation() {
  currentQuestionIndex;
  let currentQuestion = questions[currentQuestionIndex];
  explanationsElement.innerHTML = currentQuestion.explanation;
  explanationsDiv.style.display = 'block';
  console.log(explanationsElement);
}

function clickAnswer(e) {
  let clickedAnswer = e.target;

  const isCorrect = clickedAnswer.dataset.correct === 'true';
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
  showExplanation();  
}

function showScore() {
  resetState();

  if (score == questions.length) {
    questionNumElement.innerHTML = '<i class="fa-solid fa-check-circle"></i>' + " " + 'Congratulations champion!';
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
  } else if (score > questions.length / 2 && score < questions.length) {
    questionNumElement.innerHTML = '<i class="fa-solid fa-check-circle"></i>' + " " + 'You passed!';
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
  } else {
    questionNumElement.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>' + " " + 'You failed!';
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}. Please retake the quiz.`;
  }
  nextButton.innerHTML = 'Play again';
  nextButton.style.display = "block";
  explanationsDiv.style.display = "none";
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
