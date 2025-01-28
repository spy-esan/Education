
let questions = [


    {
    question: "৬ × D = ২০ হলে ম× J = ?",
    options: ["১২০","৩২০","২৫০","১০০"],
    answer: 2 
},

    { 
          question: " পাঁচ অঙ্কের বৃহত্তম সংখ্যা ও ক্ষুদ্রতম সংখ্যার ব্যবধান কত ? ", 
          options: ["৮০০০০ ", " ৮৯৯৯০ ", " ৯০০০০", " ৮৯৯৯৯"], 
          answer: 3
      },

    { 
          question: " একটি স্কুলের ছাত্রদের মধ্যে ২০ শতাংশ বিজ্ঞান ক্লাব এবং ৩০ শতাংশ বাস্কেটবল ক্লাবের ছাত্র। যদি বিদ্যালয়ের ২৫ শতাংশ শিক্ষার্থী বাস্কেটবল ক্লাবে থাকে কিন্তু বিজ্ঞান ক্লাবে না থাকে, তাহলে বিজ্ঞান ক্লাবে থাকা ছাত্রদের কত শতাংশ বাস্কেটবল ক্লাবে নেই ?", 
          options: ["৫০%  ", " ৭৫% ", " ২৫%", " কোনটি নয়"], 
          answer: 1
      },


    { 
          question: " 2-48-16+..... ধারাটির প্রথম নয়টি পদের সমষ্টি কত ? ", 
          options: ["92 ", " -72 ", " 342", " -171 "], 
          answer: 2
      },


    { 
          question: " A, P, R, X, S এবং Z এক সারিতে বসে আছে। S এবং Z এর অবস্থান সবার মধ্যখানে। A এবং P এর অবস্থান সবার প্রান্তবিন্দুতে। R বসে আছে A এর বাঁ দিকে। তাহলে P এর ডানদিকে বসেছে কে ? ", 
          options: ["A ", "R ", " X", "Z "], 
          answer: 2
      },


    { 
          question: "  একটি ট্রেন 'ক' স্টেশন থেকে যাত্রা করে ৪৫ মিনিট পর 'খ' স্টেশনে থামে। স্টেশন দুটির দূরত্ব ৮৪ কিলোমিটার হলে ট্রেনটির গড় গতিবেগ কত ?", 
          options: [" ১১২ কি.মি./ঘন্টা ", " ১১৫ কি.মি./ঘন্টা ", " ১১৮ কি.মি./ঘন্টা ", " ১২০ কি.মি./ঘন্টা  "], 
          answer: 0
      },



    { 
          question: " পরপর তিনটি বিজোড় সংখ্যার যোগফল ৫৭ হলে, মধ্যবর্তী সংখ্যাটি কত ? ", 
          options: [" ১৯ ", " ২১", " ১৭", " ২৫ "], 
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

