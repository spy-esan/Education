
   // Array of Bangla riddles and their answers
   const riddles = [
   
    { question: "কোন নদী তার নিজের নাম জানে?", answer: "পদ্মা নদী" },
    { question: "যে পাখি কখনো ডিম পাড়ে না?", answer: "কাক" },
    { question: "কোন বিলে জল নেই ?", answer: "টেবিলে" },
    { question: "কোন কানে শোনা যাই না ?", answer: "দোকানে" },
    { question: "কাঁচাতে যেই ফল সর্বজনে খায়, পাঁকলে সেই ফল গড়াগড়ি যায়?", answer: "ডুমুর" },
    { question: "কোন কানে শোনা যাই না ?", answer: "দোকানে" },
    { question: "  কোন তার তার না  ?", answer: "  কাতার  " },
    { question: "  কোন তারা তারা না   ?", answer: " একতারা   " },
    { question: " কোন হার গলাই পরে না  ?", answer: "  পাহাড়  " },
    { question: "   কোন মাসে শনিবার নেই ?", answer: "  সমাসে  " },
    { question: "  কোন ভাত খাই না  ?", answer: " প্রভাত   " },
    { question: "   কোন পথে চলতে নেই ?", answer: "  বিপথে  " },
    { question: " কোন গুন পুরিয়ে খাই ?", answer: "  বেগুন  " },
    { question: " ছোট বেলায় লম্বা, বড় হলে বেটে, বলো আমি কে ?", answer: " মোমবাতি  " },
    { question: "  কি তুমি ভাঙতে পারো, না তুলে না ফেলে  ?", answer: "  প্রতিজ্ঞা  " },
    { question: "  কোন জিনিস যত দেবে শেষ হবেনা ?", answer: "   জ্ঞান " },
    { question: "  কোন আম খাওয়া যাইনা  ?", answer: "  হারমোনিয়াম  " },
    { question: "   আমার ঘাড় আছে কিন্তু মাথা নেই , আমার দুটি বাহু আছে কিন্তু হাত নেই, বলো আমি কে ?", answer: " জামা " },
    { question: "  কি সবসময় তোমার সামনে আছে কিন্তু তুমি দেখতে পাও না   ?", answer: "  ভবিষ্যৎ " },
    { question: "  কোন জিনিস জন্মের পর থেকে বুড়ো  ?", answer: "  বৃদ্ধা আগুল " },
    { question: "  কোন বর সবাই চাই  ?", answer: "  খবর  " },
    { question: "  কোন গ্রাম এ লোক নেই  ?", answer: "  টেলিগ্রাম " },
    { question: "  কোন শাড়ী পরে না  ?", answer: " মশারি   " },
    { question: "  কোন গেট খুলে না   ?", answer: " টার্গেট  " },
    { question: "  কোন জিনিস ১০ কেজি লোহা তুলতে পারে কিন্তু ১ কেজি তুলা তুলতে পারে না   ?", answer: "  চুম্বক  " },
    { question: "  কোন পান খাই না  ?", answer: "  জাপান  " },
    { question: " কোন তাসা বাজে না   ?", answer: "  বাতাসা  " },
    { question: "   কোন ছানা খাই না ?", answer: "  বিছানা " },
    { question: "  কোন হাঁস ডিম পারে না  ?", answer: "  ইতিহাস  " },
{ question: "একটি জিনিস আছে, ভাঙ্গলে মজা, কিন্তু মেরামত করা যায় না। সেটা কী?", answer: "ডিম" },
{ question: " কোন চুড়ি খেতে ভালো ?", answer: "  খিচুড়ী " },
{ question: " ব্যবহারের আগে ভাঙতে হবে , জিনিসটার উত্তর কে কবে ?", answer: " ডিম  " },
{ question: " ফুল ছাড়া , সুতো ছাড়া তুমি কোন মালা গাঁথিতে পারবে ?", answer: "  বর্ণমালা " },
{ question: " পৃথিবীর কোন দেশে তুমি গেলে তোমাকে খুঁজে পাবে না ?", answer: " নিরুদ্দেশ  " },
{ question: " বলুনতো কি শুধু নিচে নামে ওপরে উঠে না ?", answer: "  বৃষ্টির জল " },
{ question: " চারি দিকে কাটা বেত , মাথায় মুকুট খান সাহেব , বলোতো কি ?", answer: "  আনারস " },
{ question: " কোন আম খাই না  ?", answer: " বেয়াম  " },
{ question: " কোন মাছি উড়ে না  ?", answer: "  ঘামাচি " },
{ question: " কোন গান গাওয়া যায় না  ?", answer: "  বাগান " },
{ question: " কোন মা ভাত দেয় না  ?", answer: " সিনেমা   " },
{ question: " কোন প্রশ্ন যার উত্তর সবসময় পরিবর্তন হতে থাকে ?", answer: "  কয়টা বাজে " },
{ question: " কোন শব্দটিকে সব সময় ভুল বলা হয় ?", answer: "  ভুল " },
{ question: " জ্বলছে তবু পুড়ছে না , কোন সে প্রাণী বলো তো ?", answer: "  জোনাকি " },
{ question: " কোন লঙ্কায় ঝাল নেই ?", answer: " শ্রীলঙ্কা  " },
// { question: "  ?", answer: "   " },
// { question: "  ?", answer: "   " },
{ question: " কোন চা খাই না ?", answer: " খাচা  " },

    
];

let currentRiddleIndex = 0;

// Function to get a new riddle
function getRiddle() {
    // Generate a random index
    currentRiddleIndex = Math.floor(Math.random() * riddles.length);
    
    // Set the riddle text
    document.getElementById("riddle").innerText = riddles[currentRiddleIndex].question;
    
    // Hide the answer until the user clicks "View Answer"
    document.getElementById("answer").style.display = "none";
}

// Function to show the answer
function showAnswer() {
    // Show the answer of the current riddle
    document.getElementById("answer").innerText = riddles[currentRiddleIndex].answer;
    document.getElementById("answer").style.display = "block";
}

// Load a riddle when the page loads
window.onload = getRiddle;