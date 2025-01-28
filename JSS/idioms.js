

const questions = [


     
    
     { 
         question:  " What is the meaning of the idiom 'a round dozen'  ? ", 
         options: [" a little less than a dozen  ", "  a little more than a dozen ", " a full dozen ", " round about a dozon  "], 
         answer:  2
     },
    
     {
        question: "The idiom  ' Root and branch' means--",
        options: ["from top to bottom","completely","branch like root","none"],
        answer: 1 
    },
    {
        question: " 'To kick off ' means ---- ",
        options: ["to stop","to end","to begin","to kick"],
        answer: 2 
    },

     { 
         question:  " What is the meaning of this idiom - He was always pulling my legs.", 
         options: ["He was always physically aggressive ", " He was always trying to stretch me ", "He was always trying to make fun of me ", "  He was trying to make me stand up."], 
         answer:  2
     },

    
     { 
         question:  " ' Look before you leap ' means ?", 
         options: [" Be ready ", " Be amazed ", "Beaware ", " Be successful "], 
         answer:  2
     },

    
     { 
         question:  " A person whose 'head' is in the 'clouds' is- ", 
         options: [" useless ", "  proud ", " an aviator ", "  a day dreamer "], 
         answer:  3
     },

    
     { 
         question:  " The meaning of ' Cock and bull story ' is --  ", 
         options: [" Strong fight ", "  Painful situation ", " A false story ", " Unequal fight "], 
         answer:  2
     },
    

     { 
         question:  " Choose the appropriate meaning of the idiom ' swan sang '  -- ", 
         options: ["First work  ", " Last work  ", " Middle work ", " Early work  "], 
         answer:  1
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


