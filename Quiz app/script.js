const  quizData = [
    {
        question: "which language run in a web browser?",
        a: "java",
        b: "c",
        c: "python",
        d: "javascript",
        correct: "d",
    }, 
    {
        question: "what does CSS stands for?",
        a: "cascading style sheet",
        b: "centtral style sheet",
        c: "cascsding simple sheet",
        d: "cars Suvs Sailboats",
        correct: "a",
    },
    {
        question: "what does HTML stands for?",
        a: "Hypertext Makeup Language",
        b: "Hybrid Markup Language",
        c: "Hypertext Markup Language",
        d: "Hypermark Machine Language",
        correct: "c",
    },
    {
        question: "what year was javascript launch",
        a: "1997",
        b: "1995",
        c: "1990",
        d: "1992",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerE1s.forEach(answerE1 => answerE1.checked = false)
}

function getSelected() {

    let answer
    answerE1s.forEach(answerE1 => {
        if(answerE1.checked){
            answer = answerE1.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innnerHTML =`
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})