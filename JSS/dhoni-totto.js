let questions = [

    {
        question: "কোন বানানটি শুদ্ধ ?",
        options: ["শুণ্য","পুণ্য","গুণ্য","মাণ্য"],
        answer: 1 
    },
    
    {
        question: "অ + উ = ?",
        options: ["ও","ঐ","ঔ","সবকয়টি"],
        answer: 2 
    },
    
    {
        question: "ধ্বনিতত্বের আলোচ্য বিষয় নয় কোনটি ?",
        options: ["বর্ণ","সন্ধি","প্রত্যয়","ষত্ব বিধান"],
        answer: 2 
    },
    
    {
        question: "'ণত্ব বিধান' ব্যাকরণের কোন অংশে আলোচিত হয় --",
        options: ["রূপতত্ত্ব","ধ্বনিতত্ত্ব","ভাষাতত্ত্ব","বাক্যতত্ত্ব"],
        answer: 1 
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