let timer;
let timeLeft = 20;


let questions = [

     
    { 
          question: " The dress was designed by famous ---------- indian designer . ", 
          options: ["a  ", " the ", " an", " one"], 
          answer: 2
      },
    


    { 
          question: " Do you sell bananas by -------- kilo ? ", 
          options: [" No article ", " the ", " an ", " a"], 
          answer: 0
      },
    


    { 
          question: " Ethun is -------- BBA student", 
          options: ["an ", " no article", " the ", "a "], 
          answer: 0
      },

    { 
          question: "---------- all his wealth , he is unhappy . ", 
          options: [" At", "The  ", " On ", "Despite "], 
          answer: 3
      },


      
    { 
          question: "  I have read -------- shakespeare", 
          options: [" the ", " no article", " Dan", "an "], 
          answer: 1
      },
      

//     { 
//           question: "  ", 
//           options: [" ", " ", " ", " "], 
//           answer: 3
//       },
      

//     { 
//           question: "  ", 
//           options: [" ", " ", " ", " "], 
//           answer: 3
//       },
      

//     { 
//           question: "  ", 
//           options: [" ", " ", " ", " "], 
//           answer: 3
//       },
      

//     { 
//           question: "  ", 
//           options: [" ", " ", " ", " "], 
//           answer: 3
//       },
      




  
    
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