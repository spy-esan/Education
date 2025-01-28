
let questions = [

     
    { 
        question: " Synonym of 'Paint' is ----  ", 
        options: [" capture", "dye ", " dough ", "oblige "], 
        answer: 1
    },
    
    { 
        question: " Antonym of the word 'Obdurate' is ----  ", 
        options: [" Grim", " Acrimonius", "  Boorish", "Humane "], 
        answer: 3
    },
    
    { 
        question: " Which is the following word is the correct synonym of 'Libel' ? ", 
        options: ["misrepresentation ", "convincing ", "  annihilate ", " enervated"], 
        answer: 0
    },
    
    
    { 
        question: " The word 'audacious'  means -- ", 
        options: ["Dangerous  ", " Caring", "  Daring ", "Serious "], 
        answer: 2
    },
    
    
    { 
        question: " Opposite of Smart ? ", 
        options: ["Irrelevant  ", " Boring", " Stupid  ", "Difficult "], 
        answer: 2
    },
    
    
    { 
        question: " The word  'muting'  means --", 
        options: [" silent", "shout ", "  revolt ", " vocal"], 
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