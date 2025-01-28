const messages = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const deleteBtn = document.getElementById('deleteBtn');

// Profile pictures
const userPic = '../Pho/add.avif'; // User image URL
const botPic = '../Pho/gpp.webp'; // Bot image URL

const API_KEY = "AIzaSyA5DBvdapQL-WCwIXXe3oO-pehVdlvQpJ0";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

sendBtn.addEventListener('click', sendMessage);
deleteBtn.addEventListener('click', deleteChat);

// Load chat history from localStorage
loadChatHistory();

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText) {
        addMessage(userText, 'user');
        userInput.value = '';
        getBotResponse(userText);
    }
}

function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';

    const profilePic = document.createElement('img');
    profilePic.src = sender === 'user' ? userPic : botPic;
    profilePic.className = 'profile-pic';

    const messageText = document.createElement('div');
    messageText.className = 'message-text';
    messageText.innerHTML = text; // Use innerHTML to allow for line breaks

    messageElement.appendChild(profilePic);
    messageElement.appendChild(messageText);
    messages.appendChild(messageElement);

    // Save chat history to localStorage
    saveChatHistory();

    // Scroll to the bottom
    messages.scrollTop = messages.scrollHeight;
}

async function getBotResponse(userText) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                role: "user",
                parts: [{ text: userText }]
            }]
        }),
    });

    if (response.ok) {
        const data = await response.json();
        const botResponse = data?.candidates[0].content.parts[0].text;

        // Sanitize the response to keep number serialization and remove unwanted escape characters
        const sanitizedResponse = botResponse
            .replace(/\\*(\*+)/g, '') // Remove escape characters and excess asterisks
            .replace(/\n/g, '<br>')   // Replace new lines with line breaks for better formatting
            .trim();                  // Trim whitespace

        addMessage(sanitizedResponse, 'bot');
    } else {
        addMessage("Please tell me that more clearly ! 😶", 'bot');
    }
}

function deleteChat() {
    messages.innerHTML = ''; // Clear chat history
    localStorage.removeItem('chatHistory'); // Clear chat history from localStorage
    addMessage("Hello Friends ! How can i help you? 😊", 'bot');
}




function saveChatHistory() {
    const chatHistory = messages.innerHTML; // Get chat history HTML
    localStorage.setItem('chatHistory', chatHistory); // Save to localStorage
}

function loadChatHistory() {
    const chatHistory = localStorage.getItem('chatHistory'); // Get chat history from localStorage
    if (chatHistory) {
        messages.innerHTML = chatHistory; // Set chat history HTML
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
}



// Back Button
function goBack() {
    window.history.back();
}
