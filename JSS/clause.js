

const questions = [

     
     { 
         question: "........the best car to buy is Mercedes Benz  ", 
         options: [" Because of its durability and economy  ", "  Because it lasts a long time, and it is very economical  ", "  Because of its durability and it is economical  ", " Because durability and economize it is better than all the others  "], 
         answer: 0
     },
     
     { 
         question: "Fill in the blank with appropriate word, phrase and clause(s): He insisted.........there.  ", 
         options: [" on my going ", "  is to go ", " over going  ", " to go  "], 
         answer: 0
     },
     
     { 
         question: "This is the pen I lost. Here 'I lost' is-  ", 
         options: [" A noun clause ", "  An adverbial clause ", " An adjective clause  ", " A prepositional clause  "], 
         answer: 2
     },
     
     
     { 
         question: "  What he knew was clear to all. Here what he knew is- ", 
         options: [" an adjective clause ", "  an adverbual clause ", "  a co-ordinate clause ", " a noun clause "], 
         answer: 3
     },
     
     { 
         question: " The woman ........... was old and bent. ", 
         options: [" I spoke to her ", " that I spoke  ", "  I spoke to ", " Whom I spoke to her "], 
         answer: 2
     },
     
     { 
         question: " Would you like to know- ", 
         options: ["  where he lives?", " the address of his living?  ", " there where he is staying ? ", " his staying address? "], 
         answer: 0
     },
     
     { 
         question: " Identify the quotation clause in the sentence I know the place '' where he was born '' ", 
         options: ["  Adverbial clause ", " Adjective clause  ", " Noun clause  ", " Conditional clause  "], 
         answer: 1
     },
     
     { 
         question: "  Most students don't like homework, and ........", 
         options: [" I don't too ", " either don't  ", "  neither don't", " neither do I "], 
         answer: 3
     },
     
     { 
         question: " Subordinate clauses can be found only in-  ", 
         options: [" Simple Sentence  ", "  Complex Sentence ", " Compound Sentence  ", " Complex and Compound Sentence  "], 
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