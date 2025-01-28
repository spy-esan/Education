

const  questions = [

     
     { 
         question: " A speech full of too many word is - ", 
         options: ["a big speech ", "  maiden speech", " an unimportant speech ", "a verbose speech "], 
         answer: 3
     },
     
     
     { 
         question: " ' To talk ' is a good exercise for us . Here ' to talk ' is -", 
         options: ["a noun phrase ", " an adjective phrase", " a verb phrase ", " a participle phrase"], 
         answer: 0
     },
     
     
     { 
         question: " Bill of fair is - ", 
         options: ["  A chart of bus fare", " A price list", " A list of dishes at a resturant ", "A valuable document "], 
         answer: 2
     },
     
     { 
         question: " ' To read between the lines ' means --", 
         options: ["to read carefully ", " to read only some lines", " to read quickly to save time", " to read carefully to find out any hidden meaning "], 
         answer: 3
     },
     
     { 
          question: " What does the phrase ' Thousand of years ' mean ? ", 
          options: ["one thousand years ", " two thousand years", "  since ancient time", " for a very long time"], 
          answer: 3
      },
     { 
          question: " So quickly ---- he reached home on time . ", 
          options: ["he ran as ", " he ran that ", "  did he run that", " would he run that"], 
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


