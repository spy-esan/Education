const typingForm = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
const toggleThemeButton = document.querySelector("#toggle-theme-button");
const deleteChatButton = document.querySelector("#delete-chat-button");
let userMessage = null;

// Api Configuration
const API_KEY = "AIzaSyAPtXfG10yiBxM7m3q45CTzHk3ohVQFbnw";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

const loadLocalstorageData = () => {
    const savedChats = localStorage.getItem("savedChats");
    const isLightMode = (localStorage.getItem("themeColor") === "light_mode");

    document.body.classList.toggle("light_mode", isLightMode);
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";

    chatList.innerHTML = savedChats || "";
    chatList.scrollTo(0, chatList.scrollHeight);
};

loadLocalstorageData();

const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
};

const formatApiResponse = (response) => {
    return response.replace(/\*\*(.*?)\*\*/g, (match, p1) => {
        return `<br> ${p1}<br>`;
    });
};

const validateApiResponse = (response) => {
    return response && response.trim() !== "" && response.length < 500;
};

const getFallbackResponse = () => {
    const fallbackResponses = [
        "Sometimes it's good to take a deep breath and just enjoy the moment.",
        "What a lovely day! How can I assist you further?",
        "Remember, every question is a chance to learn something new!",
        "I'm here to help! Feel free to ask me anything.",
        "Life is full of wonders. What are you curious about today?"
    ];
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};

const showTypingEffect = (text, textElement, incomingMessageDiv) => {
    const words = text.split(` `);
    let currentWordIndex = 0;

    const typingInterval = setInterval(() => {
        textElement.innerHTML += (currentWordIndex === 0 ? ` ` : ` `) + words[currentWordIndex++];
        incomingMessageDiv.querySelector(".icon").classList.add("hide");

        if (currentWordIndex === words.length) {
            clearInterval(typingInterval);
            incomingMessageDiv.querySelector(".icon").classList.remove("hide");
            localStorage.setItem("savedChats", chatList.innerHTML);
            setTimeout(() => chatList.scrollTo(0, chatList.scrollHeight), 100);
        }
    }, 75);
};

const generateAPIResponse = async (incomingMessageDiv) => {
    const textElement = incomingMessageDiv.querySelector(".text");

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: userMessage }]
                }]
            })
        });

        const data = await response.json();
        const apiResponse = data?.candidates[0]?.content?.parts[0]?.text;

        if (validateApiResponse(apiResponse)) {
            const formattedResponse = formatApiResponse(apiResponse);
            showTypingEffect(formattedResponse, textElement, incomingMessageDiv);
        } else {
            // Trigger fallback response if API response is not valid
            const fallbackResponse = getFallbackResponse();
            showTypingEffect(fallbackResponse, textElement, incomingMessageDiv);
        }
    } catch (error) {
        console.log(error);
        textElement.innerText = "Error: Unable to fetch response. Please check your connection or try again later.";
    } finally {
        incomingMessageDiv.classList.remove("loading");
    }
};

const showLoadingAnimation = () => {
    const html = `<div class="message-content">
        <img src="../Pho/google-gemini-icon.png" alt="Gemini-Image" class="avatar">
        <p class="text"></p>
        <div class="loading-indicator">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
        </div>
    </div>
    <span class="icon material-symbols-rounded"></span>`;

    const incomingMessageDiv = createMessageElement(html, "incoming", "loading");
    chatList.appendChild(incomingMessageDiv);
    chatList.scrollTo(0, chatList.scrollHeight);
    
    generateAPIResponse(incomingMessageDiv);
};

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector(".typing-input").value.trim();
    if (!userMessage) return;

    const html = `<div class="message-content">
        <img src="../Pho/mm.png" alt="User-Image" class="avatar">
        <p class="text"></p>
    </div>`;

    const outgoingMessageDiv = createMessageElement(html, "outgoing");
    outgoingMessageDiv.querySelector(".text").innerText = userMessage;
    chatList.appendChild(outgoingMessageDiv);

    typingForm.reset(); // Clear Input field
    chatList.scrollTo(0, chatList.scrollHeight); // Scroll after appending outgoing message
    setTimeout(showLoadingAnimation, 500); // Show loading animation after a delay
};


// Delete all chats
deleteChatButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all Chats?")) {
        localStorage.removeItem("savedChats");
        loadLocalstorageData();
    }
});

// Prevent default from submission and handle outgoing chat
typingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleOutgoingChat();
});

// Back Button
function goBack() {
    window.history.back();
}
