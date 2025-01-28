let questions = [


    {
        question: "নিচের কোনটি বহুবচনবাচক বাক্য ?",
        options: ["কলমটি আমার","সালমা বাড়িতে আছে","গাছে ফুল এসেছে","পুকুরে ডুব দিও না"],
        answer: 2 
    },
    
    {
        question: "'মেঘ গর্জন করলে ময়ূর নৃত্য করে' কোন ধরনের বাক্য ?",
        options: ["সরল","যৌগিক","মিশ্র","বিবৃতিমূলক"],
        answer: 0 
    },
    
    {
        question: "'গাঙ্গেয়' শব্দের প্রসারিত রূপ কোনটি ?",
        options: ["গঙ্গাজলস্নাত","গঙ্গার দিকে","গঙ্গার মতো পবিত্র","গঙ্গার অপত্য"],
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