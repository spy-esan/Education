const questions = [

//1
{
    text: "' ডেকেছে কি সে আমারে ? শুনি নাই রাখিনি সন্ধান। ' এখানে 'সে' কে ?",
    options: ["কবিভক্ত","কবির প্রিয়জন","শীতঋতু","বসন্ত ঋতু"],
    correct: 3 
},

//2
{
    text: "' সেই ফুল আমাদেরই প্রাণ। ' - এখানে 'ফুল' বলতে বোঝানো হয়েছে-",
    options: ["বাংলা ভাষা","বাংলাদেশ","একুশের কৃষ্ণচূড়া","শহিদের রক্তের বুদবুদ"],
    correct: 0 
},

//3
    {
    text: "আপদ আছে, জানি আঘাত আছে, তাই জেনে তো বক্ষে পরাণ নাচে। উদ্দীপকে আঠারো বছর বয়সের কোন বৈশিষ্ট্যের প্রতিফলন ঘটেছে ?",
    options: ["সাহসিকতা","হীনম্মন্যতা","শৃঙ্খলাবোধ","নিশ্চয়তা"],
    correct: 0 
},


//4
{
    text: "আপদ আছে, জানি আঘাত আছে, তাই জেনে তো বক্ষে পরাণ নাচে।  উদ্দীপকের সঙ্গে 'আঠারো বছর বয়স' কবিতার যে চরণের ভাবের সাথে মিল রয়েছে-    i. দুর্যোগে হাল ঠিকমতো রাখা ভার    ii. প্রাণ দেওয়া-নেওয়ার ঝুলিটা থাকে না শূন্য    iii. বিপদের মুখে এ বয়স অগ্রণী . নিচের কোনটি সঠিক ?",
    options: ["i ও ii","i ও iii","ii ও iii","i, ii ও iii"],
    correct: 2 
},


//5
{
    text: "' আমি কিংবদন্তির কথা বলছি ' কবিতায় যে কবিতা শুনতে জানে না, সে কী শুনবে ?",
    options: ["সমুদ্রের গর্জন","ঝড়ের আর্তনাদ","শ্বাপদের ভয়াবহতা","অস্ত্রের ঝনঝনানি"],
    correct: 1 
},


//6
{
    text: "' আমি কিংবদন্তির কথা বলছি ' কবি বলে  গেছেন-   i. উচ্চারিত সত্যের মতো স্বপ্নের কথা   ii. প্রবহমান নদীর কথা   iii. উজ্জ্বল জানালার কথা .  নিচের কোনটি সঠিক ?",
    options: ["i ও ii","i ও iii","ii ও iii","i, ii ও iii"],
    correct: 3 
},


//7
{
    text: "' সবাই মিলে সত্যিই আমরা বাংলাকে বিক্রি করে দিচ্ছি না তা ? '  ' সিরাজউদ্দৌলা ' নাটকে উক্তিটি কার?",
    options: ["মীরজাফর","উমিচাঁদ","জগৎশেঠ","ঘসেটি বেগম"],
    correct: 0 
},


//8
{
    text: "ঘসেটি বেগমের বাড়িতে হঠাৎ নবাব উপস্থিত  হলে, সবাই-   i. অভিবাদন জানাল   ii. হকচকিয়ে গেল   iii. সতর্ক হলো .  নিচের কোনটি সঠিক ?",
    options: ["i ও ii","i ও iii","ii ও iii","i, ii ও iii"],
    correct: 2 
},


//9
{
    text: "'সিরাজউদ্দৌলা' নাটকে প্রথম অঙ্কের প্রথম দৃশ্যের স্থান কোনটি ?",
    options: ["ফোর্ট উইলিয়াম জাহাজ","নবাবের দরবার","ঘসেটি বেগমের বাড়ি","ফোর্ট উইলিয়াম দুর্গ"],
    correct: 3 
},


//10
{
    text: "' সজ্ঞানে না জানলেও তারা একাট্টা, পথ তাদের এক।'  এখানে কার কার একাট্টা হওয়ার কথা বোঝানো হয়েছে ?",
    options: ["মজিদ ও খালেক ব্যাপারীর","জমিলা ও রহিমার","তাহের ও কাদেরের","মতলুব খাঁ ও আওয়ালপুরের পীরের"],
    correct: 0 
},

];










const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const scoreContainer = document.createElement("div");
let timerElement = document.getElementById("timer");
const startButton = document.getElementById("startTimer");
const showResultButton = document.getElementById("showResult");
let userAnswers = new Array(questions.length).fill(null);
let timerActive = false;
let timerInterval = null; // Declare the timer interval

// Generate quiz questions
questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.innerText = `${index + 1}. ${question.text}`;
    questionDiv.appendChild(questionText);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");

    question.options.forEach((option, i) => {
        const optionButton = document.createElement("div");
        optionButton.classList.add("option");
        optionButton.addEventListener("click", () => selectAnswer(optionButton, index, i));

        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.innerText = ["ক", "খ", "গ", "ঘ"][i];

        const optionText = document.createElement("span");
        optionText.style.marginLeft = "40px";
        optionText.innerText = `${option}`;

        optionButton.appendChild(circle);
        optionButton.appendChild(optionText);
        optionsDiv.appendChild(optionButton);
    });

    questionDiv.appendChild(optionsDiv);
    quizContainer.appendChild(questionDiv);
});

// Answer selection function
const selectAnswer = (optionButton, questionIndex, selectedIndex) => {
    if (!timerActive) return;
    const options = optionButton.parentElement.children;
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("selected");
    }
    optionButton.classList.add("selected");
    userAnswers[questionIndex] = selectedIndex;
};

// Start Timer Function
startButton.addEventListener("click", () => {
    if (timerActive) return;
    startTimer(30);
    timerActive = true;
    showResultButton.disabled = false;
    startButton.disabled = true;
});

// Timer Function
const startTimer = (minutes) => {
    let time = minutes * 60;
    timerInterval = setInterval(() => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        timerElement.innerText = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            timerElement.innerText = "Time Up !";
            calculateResult(); // Auto-submit on time out
        }
    }, 1000);
};

// Calculate Results
showResultButton.addEventListener("click", () => {
    clearInterval(timerInterval); // Stop the timer when result is shown
    timerElement.innerText = "Timer Stopped"; // Optional message
    calculateResult();
});

const calculateResult = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) score++;
    });
    scoreContainer.innerText = `Your Score : ${score} / ${questions.length}`;
    resultContainer.style.display = "block";
    resultContainer.appendChild(scoreContainer);
    revealAnswers();
};

// Reveal Answers
const revealAnswers = () => {
    questions.forEach((question, index) => {
        const options = quizContainer.children[index].querySelectorAll(".option");
        options.forEach((option, i) => {
            option.classList.remove("selected", "correct", "wrong");
            const circle = option.querySelector(".circle");
            if (i === question.correct) {
                option.classList.add("correct");
                circle.classList.add("correct");
            } else if (i === userAnswers[index]) {
                option.classList.add("wrong");
                circle.classList.add("wrong");
            }
        });
    });
};

