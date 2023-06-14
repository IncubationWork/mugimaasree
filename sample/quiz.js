const questions=[
    {
    question:"Javascript is an _______ language?",
    answers:
    [
         { text:"Object-Oriented",correct:true},
         { text:"Object-Based",correct:false},
         { text:"Procedural",correct:false},
         { text:"None of the above",correct:false},
    ]
   },
   {
    question:"Which of the following keywords is used to define a variable in Javascript?",
    answers:
    [
         { text:"var",correct:false},
         { text:"let",correct:false},
         { text:"Both A and B",correct:true},
         { text:"None of the above",correct:false},
    ]
   },
   {
    question:"Which of the following methods is used to access HTML elements using Javascript?",
    answers:
    [
         { text:"getElementbyId()",correct:false},
         { text:"getElementByClassName()",correct:false},
         { text:"Both A and B",correct:true},
         { text:"None of the above",correct:false},
    ]
   },
   {
    question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers:
    [
         { text:"Throws an error",correct:false},
         { text:"ignores the statements",correct:true},
         { text:"Gives a Warning",correct:false},
         { text:"None of the above",correct:false},

    ]
   },
   {
    question:"Which of the following methods can be used to display data in some form using Javascript?",
    answers:
    [
         { text:"document.write()",correct:false},
         { text:"console.log",correct:false},
         { text:"window.alert()",correct:false},
         { text:"all of the above",correct:true},
    ]
   },
   {
    question:"How can a datatype be declared to be a constant type?",
    answers:
    [
         { text:"const",correct:true},
         { text:"var",correct:false},
         { text:"let",correct:false},
         { text:"constant",correct:false},
    ]
   },
   {
    question:"When an operator's value is NULL, the typeof returned by the unary operator is:",
    answers:
    [
         { text:"Undefined",correct:false},
         { text:"Boolean",correct:false},
         { text:"Object",correct:true},
         { text:"Integer",correct:false},

    ]
   },
   {
    question:"Which of the following is not a Javascript framework?",
    answers:
    [
         { text:"Node",correct:false},
         { text:"Cassandra",correct:true},
         { text:"Vue",correct:false},
         { text:"React",correct:false},

    ]
   },
   {
    question:"  Which of the following are not server-side Javascript objects?",
    answers:
    [
         { text:"Date",correct:false},
         { text:"fuction",correct:false},
         { text:"FileUpload",correct:false},
         { text:"all of the above",correct:true},

    ]
   },
   {
    question:"Which of the following are closures in Javascript?",
    answers:
    [
         { text:"Variables",correct:false},
         { text:"Function",correct:false},
         { text:"Object",correct:false},
         { text:"all of the above",correct:true},

    ]
  }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+ ". " +currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add('btn');
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
});
}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrrect=selectedBtn.dataset.correct==="true";
    if(isCorrrect){
        selectedBtn.classList.add("correct");
        score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButton.children).forEach(button=>{
            if(button.dataset.correct=="true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz(); 
    }
})
startQuiz();