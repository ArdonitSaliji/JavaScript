const quizData = [
  {
    question: 'How old is Ardonit?',
    a: '10',
    b: '24',
    c: '19',
    d: '36',
    correct: 'c',
  },
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Javascript',
    b: 'Java',
    c: 'Python',
    d: 'C++',
    correct: 'a',
  },
  {
    question: 'Who is the President of the US',
    a: 'Florian Pop',
    b: 'Donald Trump',
    c: 'Joe Biden',
    d: 'Angela Merkel',
    correct: 'c',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was javascript launched',
    a: '1996',
    b: '2020',
    c: '2015',
    d: 'none of the above',
    correct: 'd',
  },
];
const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at 
      ${score}/${quizData.length} questions!</h2> <button onclick="location.reload()">Reload</button>`;
    }
  }
});
