
    
        const facts = [

            "Octopuses have three hearts and blue blood.",
            "Bananas are berries, but strawberries are not.",
            "A group of flamingos is called a 'flamboyance.'",
            "Humans share about 60% of their DNA with bananas.",
            "A day on Venus is longer than a year on Venus.",
            "Wombat poop is cube-shaped to prevent it from rolling away.",
            "Sloths can take up to a month to digest a single meal.",
            "The heart of a blue whale is so large that a human could swim through its arteries.",
            "Honey never spoils; archaeologists have found pots of honey in ancient tombs that are over 3,000 years old and still edible. ",
            "Antarctica is the largest desert on Earth, not the Sahara. ",
            "The Amazon rainforest produces about 20% of the Earth's oxygen. ",
            "Humans are the only animals that blush. ",
            "Some sea cucumbers can eject their internal organs as a defense mechanism. ",
            " There are more stars in the universe than grains of sand on all Earth's beaches.",
            "Giraffes have the same number of neck vertebrae as humans: seven. ",
            "The Earth's core is as hot as the surface of the sun.",
            " Koalas sleep up to 22 hours a day.",
            " The moon is drifting away from Earth at a rate of 1.5 inches per year.",
            " A cockroach can live for up to a week without its head.",
            "The human nose can detect over 1 trillion scents. ",
            "The national animal of Scotland is the unicorn. ",
            "The world's largest pyramid is not in Egypt but in Mexico. It is the Great Pyramid of Cholula. ",
            "An adult human body has about 37.2 trillion cells. ",
            " The average person walks the equivalent of three times around the world in their lifetime.",
            " There are more trees on Earth than stars in the Milky Way galaxy. ",
            "Jellyfish have been around for over 500 million years, making them older than dinosaurs. ",
            "The shortest commercial flight in the world lasts only 57 seconds between two Scottish islands. ",
            "Tigers have striped skin, not just striped fur. ",
            "The loudest sound ever recorded was the eruption of the Krakatoa volcano in 1883. ",
            "The surface of Mars is covered in rust, which gives it its red color. ",
            " Butterflies taste with their feet. ",
            " A snail can sleep for three years at a time.",
            " The Great Wall of China is not visible from space with the naked eye.",
            "Elephants are the only animals that cannot jump. ",
            " A day on Earth used to be only 18 hours long around 1.4 billion years ago.",
            " Venus is the hottest planet in our solar system, not Mercury. ",
            " The human eye can distinguish about 10 million different colors.",
            "Otters hold hands while sleeping to prevent drifting apart. ",
            
        ];

        function generateFact() {
            const randomIndex = Math.floor(Math.random() * facts.length);
            document.getElementById('fact').innerText = facts[randomIndex];
        }


        // Array of Bangla random facts
const banglaFacts = [

  "মৌমাছি কখনোই একবারের জন্য ১০০০ ফুলে পরাগায়ন করতে পারে।.",
  " এক সেকেন্ডে ২৫,০০০ কেঁচো মরে যায় ",
  " বিশ্বের সবচেয়ে বড় প্রাণী হচ্ছে নীল তিমি ",
  "শিম্পাঞ্জিরা ৯০% ডিএনএ মানুষের সাথে মিল রয়েছে  ",
  " বিশ্বে প্রায় ৭৫% মানুষের ডান হাতে কাজ করার অভ্যাস রয়েছে ",
  " মানুষের শরীরে ৩৪০টি কণ্ঠস্বরের হাড় রয়েছে ",
  " গরুর হৃদপিণ্ড একটি গাড়ির চাকার সমান ",
  " ফ্যালকন পাখি পৃথিবীর সবচেয়ে দ্রুত উড়তে সক্ষম ",
  " ঘড়িপাল্লার মতো ত্বকের নিচে মেরুদণ্ডের অংশ রয়েছে ",
  " মানুষের চোখে ১০ মিলিয়নেরও বেশি রঙের পার্থক্য বোঝার ক্ষমতা রয়েছে ",
  " সাপের কাছে লেজের মাধ্যমে দৃষ্টি শক্তি বাড়ানোর ক্ষমতা থাকে ",
  " আফ্রিকান হাতি পৃথিবীর সবচেয়ে বড় স্থল স্তন্যপায়ী প্রাণী ",
  " পিংগুইন মাত্র ৩৫-৪০ মিনিটের মধ্যে পলাতক থাকে। ",
  " প্রজাপতিরা তাদের পায়ের সাহায্যে স্বাদ গ্রহণ করে ",
  "  কোন পাখি উড়তে পারেনা তা হলো অস্ট্রেলিয়ার ইমু।",
  "বিশ্বের সবচেয়ে উঁচু পাহাড় মাউন্ট এভারেস্ট। ",
  " কম্পিউটার ইন্টারনেটের মাধ্যমে ১০০ বিলিয়ন ডাটা টানেল তৈরি করতে সক্ষম। ",
  " ডলফিনরা সমুদ্রের গভীর থেকে ৩০০০ ফুট উচ্চতায় উঠতে পারে। ",
  " মানুষের শরীরের অঙ্গগুলোর মধ্যে সবচেয়ে বড় অঙ্গ হলো ত্বক। ",
  "সাপের জিব ১৬ ইঞ্চি পর্যন্ত লম্বা হতে পারে। ",
  " মাছি একটি অঙ্গের উপর ৮০০০ রকম গন্ধ শনাক্ত করতে পারে।",
 "পৃথিবীর প্রথম বিমান উড়ানোর জন্য ১২ সেকেন্ড সময় লেগেছিল।",
 "সাপ, কচ্ছপ এবং গরু তিনটি প্রজাতির সাথে বন্ধুত্বের সম্পর্ক থাকতে পারে।",
 "গ্রীনল্যান্ডের একটি নদী আছে যা সারা বছর বরফ থাকে।",
 "আপনার শরীরে প্রতিদিন প্রায় ৩৪,০০০ নতুন কোষ তৈরি হয়।",
 "বিড়ালরা মানুষের গন্ধ থেকে তাদের মালিকের উপস্থিতি চিনতে পারে।",
 "পিপঁজনের প্রজাতি হলো মানুষের সঙ্গে বসবাস করা প্রথম প্রাণী।",
 "মানুষের মস্তিষ্ক প্রতি সেকেন্ডে ১ মিলিয়ন সিগন্যাল পাঠাতে সক্ষম।",
 "অর্কিড ফুলের ২৫,০০০ প্রজাতি রয়েছে।",
 "সূর্যের তাপমাত্রা প্রায় ১৫০০ ডিগ্রি সেলসিয়াস।",
 "মানুষের দাঁতে ২০% ক্যালসিয়াম থাকে।",
 "বিষধর সাপ প্রায় ৩০ ফুট লম্বা হতে পারে।",
 "কুমিরের হৃদপিণ্ড ১২০,০০০ বছর বাঁচে।",
 "একটি হ্রদের পানি ২,০০০ বছরের পুরানো হতে পারে।",
 "প্রাপ্তবয়স্ক মানুষের রক্তের মোট ৭০% জল।",
 "লেমুরের শারীরিক গঠন মানুষকে বেশিরভাগ সময় স্মরণ করিয়ে দেয়।",
 "উটেরা দু'টি পেটে খাদ্য জমা করে।",
 "বিশ্বে সবচেয়ে বড় বানরের নাম গোবি।",
 "চাঁদের গ্রহে কোনও বাতাস নেই।",
 "ডলফিনদের ভাষা এতটাই জটিল যে তারা দুনিয়ার সবচেয়ে মেধাবী প্রাণী।",
 "মানুষের চোখ দুটি ১২০ ডিগ্রি পর্যন্ত দৃষ্টি শক্তি থাকতে পারে",
 "পেঁয়াজ কাটার সময় চোখের পানি পড়ার কারণ হচ্ছে এটি একটি রাসায়নিক বিক্রিয়া।",
 
];

// Function to get a random Bangla fact
function getBanglaFact() {
  const randomIndex = Math.floor(Math.random() * banglaFacts.length);
  return banglaFacts[randomIndex];
}

// Display random Bangla fact
const factElement = document.getElementById("banglaFact");
factElement.innerText = getBanglaFact();

// Optional: refresh the fact on button click
document.getElementById("newBanglaFactButton").addEventListener("click", () => {
  factElement.innerText = getBanglaFact();
});