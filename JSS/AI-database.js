const knowledge = {
    "hello": "Hi there! How can I assist you today?",
    "hey": "Hi there! How can I assist you today?",
    "helo": "Hi there! How can I assist you today?",
    "how are you": "I'm doing well, thanks ! how about you? 😃",
    "what is your name": "My name is Mind !.",
    "bye": "Goodbye! Have a great day!",
    "Nice name": "Thanks for your Compliment !",
    "nice":"Thank You 😎",
    "no":"Ok  !",
    "good": "That's Great !",
    "well": " Wow That's Great !",
    "tomke ke banaise": " Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊!",
    "Better": "That's Great !",
   " Thank you?":" You're Most Welcome .❤️ ",
   " Can you help me with my homework?":" Absolutely! Just let me know the subject and the specific problem you're facing, and I'll do my best to assist you. ",
   " thanks?":" You're Most Welcome .❤️ ",
   "what is your name": "I'm a chatbot created to assist you. You can call me Mine.",
   "bye": "Goodbye! Have a Nice day!",
   "help": "Sure! What do you need help with?",
    " Who created you ?":" Ethun was created me on 13th October , 2024 !😊 .",

    
    " Who is your creator ?":" Ethun was created me on 13th October , 2024 !😊 .",
    " Who maked you ?":" Ethun was created me on 13th October , 2024 !😊 .",
    " Who make you ?":" Ethun was created me on 13th October , 2024 !😊 .",
    " Who creates you ?":" Ethun was created me on 13th October , 2024 !😊 .",
    " Who makes you ?":" Ethun was created me on 13th October , 2024 !😊 .",
    " your creator name ?":" Ethun was created me on 13th October , 2024 !😊 .",
    "tomare ke baniyeche":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "tmk k banaise":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "tmk k baniyeche":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "tomake k baniyeche":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "tomake ke banaise":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "tmke ke banaise":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "tmk ke baniyeche":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "tmke ke baniyeche":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "tomake ke baniyeche":"Amke Ethun Baniyeche ! Apnar Ei Apps Somporke Kisu Janar thakle Bolben Amke 😊 ",
    "How can i focused on my study": " Staying focused on your studies can be challenging, but with the right strategies, you can improve your concentration and productivity.      Here are some tips:      1.Set Clear Goals: Define what you want to achieve in each study session. Break larger tasks into smaller, manageable goals.           2. Create a Study Schedule: Allocate specific times for studying each subject. Consistency helps build a routine.             3. Minimize Distractions: Find a quiet study space. Turn off notifications on your phone or use apps that limit distractions.                     4.Use the Pomodoro Technique: Study for 25 minutes, then take a 5-minute break. After four sessions, take a longer break (15-30 minutes)                       .5.Stay Organized: Keep your study materials organized. Use folders or digital tools to track assignments and notes.Experiment with these strategies to find what works best for you!",
    "How can I improve my study habits?": "Consider setting a regular study schedule, breaking your study sessions into manageable chunks, and using active learning techniques like summarizing and teaching others.",
   "How can I improve my study habits?": "Consider setting a regular study schedule, breaking your study sessions into manageable chunks, and using active learning techniques like summarizing and teaching others.",
    "Can you explain photosynthesis?": "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy, using sunlight to convert carbon dioxide and water into glucose and oxygen.",
    "What was the significance of the Magna Carta?": "The Magna Carta, signed in 1215, limited the powers of the king and laid the foundation for modern democracy by establishing the principle that everyone is subject to the law.",

};





// Synonyms for more flexible responses
const synonyms = {
    "hello": [
        "hi", "hey", "greetings", "howdy", "salutations", 
        "what's up", "hello there", "holla", "yo", "sup", 
        "good day", "salute", "ahoy", "bonjour", "hola",
        "what's happening", "how's it going", "how's tricks", 
        "what's crackin'", "how goes it", "g'day", "how's life", 
        "hey there", "what's new", "long time no see", "look who it is"
    ],
    "bye": [
        "goodbye", "farewell", "see you later", "take care", 
        "catch you later", "peace out", "adios", "bye-bye", 
        "until next time", "ciao", "see ya", "later", 
        "have a good one", "so long", "take it easy", 
        "stay safe", "bye for now", "au revoir", "toodles", 
        "cheerio", "sayonara", "hasta la vista"
    ],
    "how are you": [
    "how do you do", "how are ya", 
        "how have you been", "hows everything", 
    "what about you",
        "how are you doing", "everything good?", "how are you feeling", 
        "how's your day?", "how's your week?", "how's it hanging?", 
        "you good?", "how's it shaping up?", "doing alright?", 
        "how's your health?", "what's on your mind?","how are u?"
    ],
    "nice": [
        "great", "awesome", "fantastic", "cool", 
        "lovely", "wonderful", "excellent", "superb", 
        "brilliant", "amazing", "impressive", "top-notch", 
        "outstanding", "remarkable", "fabulous", "splendid", 
        "beautiful", "magnificent", "terrific", "first-rate", 
        "extraordinary", "neat"
    ],
    "thank you": [
        "thanks", "appreciate it", "much appreciated", 
        "thank you very much", "thanks a lot", "cheers", 
        "grateful", "many thanks", "thank you kindly", 
        "thanks a million", "I owe you one", "you're a lifesaver", 
        "thank you so much", "thanks heaps", "thanks tons", 
        "I appreciate your help", "that means a lot", "I'm thankful", 
        "you're the best", "you rock", "I can't thank you enough"
    ],
    "sorry": [
        "apologies", "my bad", "forgive me", 
        "pardon me", "I apologize", "excuse me", 
        "I regret that", "I didn't mean to", "sorry about that", 
        "my sincere apologies", "I take full responsibility", 
        "please forgive me", "I didn't intend to", "whoops", 
        "my fault", "I messed up", "I didn't mean it", 
        "I feel bad about that", "I hope you can forgive me", 
        "sorry for the trouble", "I owe you an apology"
    ],
    "yes": [
        "absolutely", "sure", "definitely", "yes indeed", 
        "certainly", "of course", "exactly", "for sure", 
        "affirmative", "totally", "indeed", "you bet", 
        "right on", "without a doubt", "yup", "yep"
    ],
    "no": [
        "nope", "nah", "not at all", "definitely not", 
        "absolutely not", "no way", "not really", 
        "no chance", "not on your life", "no siree", 
        "negative", "nada", "never", "not for me", 
        "no thank you", "certainly not","ntg","nothing","kichu na","kisu na","no thanks"
    ],
    "help": [
        "assist", "aid", "support", "help me out", 
        "can you help?", "I need assistance",
        "can you assist?", "I could use some help", "help please", 
        "I'm looking for help", "guide me", "show me the way", 
        "I require assistance", "I'm in need of support", "please",
    ],
    "what": [
        "what's that", "what's this", "what do you mean?", 
        "what's going on", "what's up with that", "what's happening", 
        "what do you say", "what gives", "what's the deal?", 
        "what's the matter", "what's the situation"
    ],
    "why": [
        "why is that", "why do you say?", "what's the reason?", 
        "what's the cause?", "why would that be?", "why do you think?", 
        "why not?", "what's the explanation?"
    ],
    "when": [
        "when is that", "when will it happen?", "when do you think?", 
        "at what time?", "when exactly?", "when can we expect it?"
    ],
    "where": [
        "where is that", "where can I find?", "where are you?", 
        "where's it at?", "where do we go from here?"
    ],
    "who": [
        "who is that", "who are you?", "who's involved?", 
        "who can help?", "who else is there?"
    ],
    "like": [
        "such as", "for example", "similar to", "as in", 
        "like this", "like that"
    ],
    "maybe": [
        "perhaps", "possibly", "might be", "could be", 
        "there's a chance", "it's possible", "I don't know for sure"
    ],
    "good": [
        "great", "fine", "wonderful", "excellent", 
        "super", "fantastic", "nice", "pleasant", 
        "amazing", "positive", "beneficial","good"
    ],
    "bad": [
        "awful", "terrible", "poor", "not good", 
        "subpar", "dreadful", "horrible", "unpleasant", 
        "negative", "disappointing"
    ],
    "Who created you ?": [
        " Who is your creator", "Who maked you  ", " Who make you ", " Who creates you ", 
        " Who makes you ", " ", " ", " ", 
       
    ]
};


