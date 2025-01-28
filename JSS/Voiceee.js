let element = document.getElementById("text");
// let element = document.getElementById("text2");
// SpeechRecognition object
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)(); 

recognition.continuous = true;
let isRecognizing = false; // Flag to track recognition state
let currentLanguage = "en-GB"; // Default language is English

// Function to update recognition language
function switchLanguage(lang) {
  recognition.lang = lang;
}

// Initialize with English language
switchLanguage(currentLanguage);

// Handle voice results
recognition.onresult = (event) => {
  for (const result of event.results) {
    element.innerText = result[0].transcript;
  }
};

// Reset flag when recognition ends
recognition.onend = () => {
  isRecognizing = false;
};

// Function to start recognition
function startRecognition() {
  if (!isRecognizing) {
    recognition.start();
    isRecognizing = true;
  }
}

// Event handlers for buttons
document.getElementById('english-btn').onclick = () => {
  currentLanguage = "en-GB"; // Switch to English
  switchLanguage(currentLanguage);
  recognition.stop(); // Stop current recognition session
  startRecognition(); // Restart with the new language
};

document.getElementById('bangla-btn').onclick = () => {
  currentLanguage = "bn-BD"; // Switch to Bangla (Bangladesh)
  switchLanguage(currentLanguage);
  recognition.stop(); // Stop current recognition session
  startRecognition(); // Restart with the new language
};