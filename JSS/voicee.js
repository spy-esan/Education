



const questions = [

     
     { 
         question: " He expects him soon. (make it passive) ", 
         options: [" He is expected soon ", " We are expected him soon ", " He is expect soon ", " We are expected soon "], 
         answer: 0
     },
     
     { 
         question: " The passive from in the present perfect of the sentence - ( He has eaten a mango)  ", 
         options: [" A mango has been eaten by him", " A mango is being written by him", " A mango is being eaten by him ", " A mango had been eaten by him"], 
         answer: 0
     },
     
     { 
         question: " Choose the correct passive sentence:  ", 
         options: [" The meeting is to be reschedule ", " The meeting is to be rescheduled ", " The meeting is to rescheduled  ", " The meeting to be rescheduled "], 
         answer: 1
     },
     
     { 
         question: "  The active form of the sentence- ( They were made to go home by him)  ", 
         options: [" He made them go home", " He made them gone home  ", " He made them going home ", " He made them to go home"], 
         answer: 0
     },

     
     { 
         question: "  What is the active/passive voice of ( They say that you did that ) - ", 
         options: ["You are told to do that  ", " You are advised to do that ", " You did that said by them ", " You are said to have done that "], 
         answer: 3
     },
     
     { 
         question: "  Which one of the following sentences is in passive form? ", 
         options: [" They are building a new road in the city", " The room has been cleaned ", "  Somebody has cleaned the room", " Somebody is using the computer now "], 
         answer: 1
     },
     
     { 
         question: "  ( He is beating the thief )  বাক্যটির সঠিক Passive form- ", 
         options: [" The thief was being beatten by him.", "  The thief is being beat by him", " The thief is beaten by him ", " The thief is being beaten by him "], 
         answer: 3
     },
     
     { 
         question: "  ( Do not open the door )  The correct passive form of the sentence is - ", 
         options: [" Let the door not be opened ", "  Let not open the door", " Let the door be open ", " Let the door be not open"], 
         answer: 0
     },
     
     
      
      
     
     
 
 
]








let questionHistory = [];
let currentQuestionIndex = -1;

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function loadQuestion(question) {
    document.getElementById('question').innerText = question.question;

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('li');
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(optionElement, index, question.answer);
        optionsList.appendChild(optionElement);
    });

    document.getElementById('prevBtn').disabled = currentQuestionIndex <= 0;
}

function nextQuestion() {
    const nextQuestion = getRandomQuestion();
    questionHistory = questionHistory.slice(0, currentQuestionIndex + 1);
    questionHistory.push(nextQuestion);
    currentQuestionIndex++;
    loadQuestion(nextQuestion);
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(questionHistory[currentQuestionIndex]);
    }
}

function selectOption(element, index, correctAnswer) {
    const options = document.querySelectorAll('.options li');
    
    options.forEach(option => {
        if (!option.classList.contains('correct') && !option.classList.contains('incorrect')) {
            option.classList.remove('selected');
        }
    });

    if (index === correctAnswer) {
        element.classList.add('correct');
        document.getElementById('correctSound').play();
    } else {
        element.classList.add('incorrect');
        document.getElementById('incorrectSound').play();
    }

    element.classList.add('selected');
}

nextQuestion();

// Back Button
function goBack() {
    window.history.back();
}