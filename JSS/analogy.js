
const questions = [

     
     { 
         question: "No spelling error occurs in . ", 
         options: ["interogate ", " intarrogate", " interogate ", " interrogate"], 
         answer: 3
     },
     
     { 
         question: "Which is correct ? ", 
         options: ["Sculpturist ", " Sculpore", " Sculptor", "Sculpturer "], 
         answer: 2
     },
     
     { 
         question: "Find the correctly spelt word - ", 
         options: ["Miscellaneous ", "Miscellanous ", " Miscllancous", " Miscelaneous"], 
         answer: 0
     },
     
     { 
         question: " No spelling mistake occurs in -", 
         options: ["hedious ", " hindeous", " hideuous", " hideius"], 
         answer: 1
     },
     
     { 
         question: " Which spelling is correct ?", 
         options: ["necessary ", " nesessary", " necessery", "neccesary "], 
         answer: 0
     },
     
     { 
         question: "Find the incorrectly spelled word . ", 
         options: [" committe", " committe", "saperated ", " psychology"], 
         answer: 2
     },
     
     { 
         question: " Which word is correctly spelt ?", 
         options: [" renaisance ", " quotidian", "etiqueette ", "repetation "], 
         answer: 1
     },
     
     { 
         question: "Which one of the following is the correctly spelling ? ", 
         options: [" Abborigines", "Aboriginnes ", "Aborigines ", " Aboregence"], 
         answer: 2
     },
     
     { 
         question: " Which is the currency name of China ? ", 
         options: [" Yuan", " won", " Rupiah", " Renminbi"], 
         answer: 0
     },
     
     { 
         question: "Which is correct ? ", 
         options: ["Pillar ", "Pilar ", " Piler", "Piller "], 
         answer: 0
     },
     
     { 
         question: " Find the word that is spelt incorrectly .", 
         options: [" criticised", " curiosity", " attendence", "carefullly "], 
         answer: 2
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


