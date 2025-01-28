let questions = [

    {
        question: "'Shakespeare' নামের প্রতিবর্ণীকরণ--",
        options: ["সেক্সপিয়র","শেক্‌স্ পীয়র্","সেকশপীয়র","শেকশপিয়ার"],
        answer: 1 
    },
    
    {
        question: "নিচের কোন বাগধারাটির অর্থ 'নিতান্ত অলস'",
        options: ["আমড়া কাঠের ঢেঁকি","গোঁফ খেজুরে","আলালের ঘরের দুলাল","আদুরে গোপাল"],
        answer: 1 
    },
    
    {
        question: "'Nationalism' এর বাংলা পরিভাষা কোনটি ?",
        options: ["জাতীয়","জাতীয়তাবাদ","জাতীয়তা","জাতি"],
        answer: 1 
    },
    
    {
        question: "বাক্য সংকোচন: হাতির বাসস্থান-",
        options: ["গজগৃহ","হাতিগৃহ","গুরুগৃহ","খাদ্য"],
        answer: 0 
    },
    
    {
        question: "'রসাতলে গমন'  শব্দটির অর্থ-",
        options: ["রসের ভেতরে যাওয়া","রসসিক্ত হওয়া","রসামৃত পান করা","অধঃপতন যাওয়া"],
        answer: 3 
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