
const questions = [


    
{
    question: "সামাজিক বিবর্তনবাদ তত্ত্বের প্রবক্তা ?",
    options: ["চার্লস ডারউইন","হার্বাট স্পেন্সার","জাঁ-জ্যাক রুশো","ইবনে খালদুন"],
    answer: 1 
},

{
    question: "নিচের কোনটি ব্লু অর্থনীতির সাথে সম্পর্কিত ?",
    options: ["বনজ সম্পদ","খনিজ সম্পদ","সমুদ্র সম্পদ","মৎস সম্পদ"],
    answer: 2 
},

{
    question: "বার ভূঁইয়াদের মধ্যে ঢাকা বিশ্ববিদ্যালয় এলাকায় কার সমাধি রয়েছে ?",
    options: ["ঈশা খাঁ","উসমান খাঁ","মুসা খাঁ","ফজল গাজী"],
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


