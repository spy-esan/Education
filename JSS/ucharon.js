let questions = [

{
    question: "'ব্যতীত' শব্দের শুদ্ধ উচ্চারণ কোনটি ?",
    options: ["বেতিত","বতিত","বেতিতো","বাতিতো"],
    answer: 2 
},

{
    question: "'জ' উচ্চারণে কোন কোন প্রত্যঙ্গের প্রয়োজন হয় ?",
    options: ["দন্তমূল ও জিহ্বার সম্মুখ ভাগ","দন্তমূলের শেষাংশ ও জিহ্বার পাতা","জিহ্বার গোড়ালি ও তালুর নরম অংশ","দু-ঠোঁটের সংস্পর্শ"],
    answer: 1 
},

{
    question: "বাংলা শব্দ 'অধ্যাপক' এর সঠিক উচ্চারণ কোনটি ?",
    options: ["অধ্যাপোক","ওদধাপোক্","অধ্যাপক","শুদ্ধাপক"],
    answer: 1 
},
{
    question: "'অভিব্যাপ্তি' শব্দটির যথাযথ উচ্চারণ কোনটি ?",
    options: ["অভিব্যতি","অভিব্‌ ব্যাপতি","অভিব্যাপতি","ওভিব্‌ ব্যাপতি"],
    answer: 3 
},

{
    question: "'সত্য' শব্দটির সঠিক উচ্চারণ-",
    options: ["অসইতত","অসইততো","শোততো","অশোততো"],
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