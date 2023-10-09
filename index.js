const questions =[
    {
        question: "which is the largest animal in the world?", 
        answers : [
            {text: "shark", correct: true},
            {text: "tiger", correct:false},
            {text: "elephant", currect: false},
            {text: "dog", correct: false},
        ]
    },
    {
        question: "who was Prime Minster of India ?",
        answers : [
            {text: "Jitendra Vaishnav", correct: false},
            {text: "Yogi Adityanath", correct:false},
            {text: "Amit Shah", currect: false},
            {text: "Narendra Modi", correct: true},
        ]
    },
    {
        question: "How many states in India?",
        answers : [
            {text: "44", correct: false},
            {text: "29", correct:false},
            {text: "28", currect: true},
            {text: "35", correct: false},
        ]
    },
    {
        question: "India's first president name is?",
        answers : [
            {text: "Rabindranath tagore", correct: false},
            {text: "Rajendra Presad", correct:true},
            {text: "Sardar vallabh bhai patel", currect: false},
            {text: "Sarvapalli Radhakrishna", correct: false},
        ]
    }
];

const ansButtons=document.getElementsByClassName("buttons");
const questionElement=document.getElementById("question");
const  nextButton=document.getElementById("next");
console.log(nextButtons);

let currentQuestionIndex=0;
let score= 0;

function startQuiz(){
    currentQuestionIndex=0;
    score= 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestion+1;
    questionElement.innerHTML= questionNo+ "."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("ans");
        ansButtons.appendChild(button);
    });

}
startQuiz();