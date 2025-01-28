
let questions = [

     
    { 
        question: " I have  a plan ------- it is bad weather .", 
        options: ["  However ", " despite ", " Although  ", " None "], 
        answer: 0
    },
    
     
    { 
        question: " There is ----------- hope of her recovery. ", 
        options: [" many ", " little ", " very  ", " few"], 
        answer: 1
    },
    
    { 
          question: " The fibrous membranes surrounding -------- add strength to the parts of the body they cover . ", 
          options: [" moreover", "and ", "since ", " furthermore"], 
          answer: 1
      },
    
    { 
          question: " ---------- his becoming a teacher, he does not have any moral scruples. ", 
          options: [" Although", " Despite of ", " In spite of  ", " Instead of"], 
          answer: 2
      },
    


    {  
          question: " ---------- his alert and vigilant presence,all predatory animals were said to have been kept within bounds . ", 
          options: ["Hence ", "However ", " in addition to", " Because of "], 
          answer: 3
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