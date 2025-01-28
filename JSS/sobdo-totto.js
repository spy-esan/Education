let questions = [

    {
        question: "একুশে কোন ধরনের শব্দ ?",
        options: ["সংখ্যাবাচক শব্দ","গণনা বাচক শব্দ","অঙ্কবাচক শব্দ","তারিখ বাচক শব্দ"],
        answer: 3 
    },
    
    {
        question: "অধিকার' শব্দটিতে' অধি' কোন উপসর্গ ?",
        options: ["বাংলা","সংস্কৃত","উর্দু","ফারসি"],
        answer: 1 
    },
    
    {
        question: "'গল্প' শব্দটি সংস্কৃত কোন শব্দ থেকে এসেছে ?",
        options: ["স্বল্প","অল্প","কল্প","জল্প"],
        answer: 3 
    },
    
    {
        question: "'মনমাঝি' কোন সমাসের উদাহরণ ?",
        options: ["দ্বিগু","বহুব্রীহি","রুপক কর্মধারয়","নিত্য সমাস"],
        answer: 2 
    },
    
    {
        question: "'খানি' পদাশ্রিত নির্দেশকটি কী অর্থে ব্যবহৃত হয়েছে ?",
        options: ["নির্দিষ্টার্থে","পদাশ্রিত নির্দেশক হিসেবে","অনির্দিষ্টতার্থে","ক, খ ও গ"],
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