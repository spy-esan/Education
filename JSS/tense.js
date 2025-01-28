const questions = [





{
    question: '----traffic in Dhaka City is increasing, no one is doing anything about it. Fill in the gap.',
    options: ["Because","Since","Although","Which"],
    answer: 2 
},

{
    question: 'As the sun, I decided to go out.',
    options: ["was shining","have shone","shine","shines"],
    answer: 0 
},

{
    question: 'He has been ill------ friday last.',
    options: ["since","in","from","to"],
    answer: 0 
},

{
    question: 'I have lived in Cumilla ----- .',
    options: ["from 5 years","with 5 years","for 5 years","till now"],
    answer: 2 
},

{
    question: 'Select the correct sentence --',
    options: ["He has come home yesterday.","He came home yesterday.","He had come home yesterday.","He would come home yesterday."],
    answer: 1 
},

{
    question: 'She is always ----- her gloves.',
    options: ["loosing","loses","loose","losing"],
    answer: 3 
},

{
    question: 'Do not call me after ten oclock. I ----.',
    options: ["will sleep","will be sleeping","will have slept","will have been sleeping"],
    answer: 1 
},

{
    question: 'He has been ill ----- friday last.',
    options: ["since","in","from","Don"],
    answer: 0 
},

   
    { 
        question: "  One of the professor's greatest attributes is -------- .", 
        options: ["When he gives lectures", "how in the manner that he lectures", "the way to give lectures", "his ability to lecture"], 
        answer: 3// Index of the correct answer
    },


   
    { 
        question: " I ------  to a foreign country.", 
        options: ["was nerver been", "am never gone", "have never been", "am never been"], 
        answer: 2
    },


   
    { 
        question: "Hurrah ! we have won the match . What kind of sentence is this?", 
        options: ["Assertive", "Optative", "Imperative", "Exclamatory"], 
        answer: 3 
    },

 
    { 
        question: " Which one is the correct sentence?", 
        options: ["I know him for two years", "I have been knowing him for two years", "I have know him for two years", "I have known him since years"], 
        answer: 2
    },
    

  
    { 
        question: "----- school very young, he is very successful.", 
        options: ["Although leaving", "In spite of he left", "Because of", "In spite of leaving"], 
        answer: 3 
    },
    

 

    { 
        question: " Which one of the following is a compound sentence?", 
        options: ["I am glad that you have come ", " I have found the pen of lost ", "The enemy fled as soon as they sow us ", " The enemy saw us and fled at once "], 
        answer: 3
    },

    
    { 
        question: "Which is correct ? ", 
        options: [" We write by ink ", " We write with ink ", " We write in ink  ", " We write under ink"], 
        answer: 1
    },

    
    
    { 
        question: "Hold fast to dreams for when dreams £20 ------  ", 
        options: ["life is broken ", "man died  ", " man become helpless", "life is a barren field "], 
        answer: 3
    },

    
   
    { 
        question: "Choose the correct sentense ----", 
        options: ["I am very better today", "The goods are of inferior qualities ", "He gave me some advice", "He requested of my help"], 
        answer: 2
    },
    


    
    { 
        question: "When water ----- it turns into ice . ", 
        options: [" Will freeze", "freezes ", " would freeze", " froze"], 
        answer: 1
    },
    
    
    
    { 
        question: "Which Sentence is correct ?", 
        options: ["I wish i was a king ", " I wish i am a king", " I wish i can be a king", " I wish i were a king"], 
        answer: 3
    },
    
    

    
    { 
        question: "I ------ him only one letter up to now .", 
        options: [" sent ", "had sent ", "have sent ", "send "], 
        answer: 2
    },
    
    

    
    { 
        question: "A good player should know ------.", 
        options: [" how to practice hard", "how to be a good player ", " how to play effectively", " how to play in efficiently "], 
        answer: 3
    },
    
    

    
    { 
        question: " Choose the correct option: Even as harvesting was going on ", 
        options: [" the rainy reason began", " the rainy season has begun", " the rainy reason had begun", " the rainy seasons begins"], 
        answer: 0
    },
    
    

   
    { 
        question: "How ---- learning English", 
        options: ["long have you been", "much time are you ", " long are you", " many times have you been"], 
        answer: 0
    },
    

   
    { 
        question: "He said nothing ---- a long time", 
        options: [" after", " since", " during", " for"], 
        answer: 3
    },
    
    

    
    { 
        question: "Those who are vulnearable are ----", 
        options: [" aggressive and uncooperative", " reed to be trained in intensive care units", " guilty of crime", "susceptible to injury or disease  "], 
        answer: 3
    },
    

   
    
    { 
        question: "The author states that during wartime the regular sources of news present only ----", 
        options: [" optimistic reports ", "pessimistic reports ", " limited information", "government propaganda "], 
        answer: 2
    },


   
    { 
        question: "A good student must know -----", 
        options: [" to study hard", " to be a good student ", " how to study effectively", " the way of efficiency in study"], 
        answer: 2
    },
    


   
    { 
        question: "Choose the correct sentence :", 
        options: [" A snake bite him yesterday", " A snake bit him yesterday", " A snake bitten him yesterday", "A snake beat him yesterday "], 
        answer: 1
    },
    
    
    
];




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


