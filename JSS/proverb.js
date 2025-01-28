// Array of Proverbs
const banglaFacts = [
     "<span style='color: blue;'>যারে দেখতে নারি, তার চলন বাঁকা</span> <br> <br><q> Faults are thick where love is thin </q>",
     "<span style='color: blue;'>  যতো পায়, ততো চায় </span> <br> <br><q> The more man gets, the more he wants </q>",
     "<span style='color: blue;'>  অতি ভক্তি চোরের লক্ষণ  </span> <br><br>  <q> Too much courtesy, <br> too much craft </q>",
     "<span style='color: blue;'> যেখানে বাঘের ভয় সেখানেই সন্ধ্যা হয়  </span> <br><br><q> Dangers often come where danger is feared </q>",
     "<span style='color: blue;'>  যার জ্বালা সেই জানে </span> <br> <br><q> The wearer best knows where the shoe pinches </q>",
     "<span style='color: blue;'> শেষ রক্ষাই রক্ষা / শেষ ভালো যার, সব ভালো তার  </span> <br> <br><q> All's well that ends well </q>",
     "<span style='color: blue;'> সবুরে মেওয়া ফলে  </span> <br> <br> <q> Patience is bitter, but its fruit is sweet </q>",
     "<span style='color: blue;'>  একতাই উত্তান বিভেদের পতন </span> <br><br> <q> United we stand, divided we fall </q>",
     "<span style='color: blue;'> ভাগ্য সাহসীদের প্রতি সুপ্রসন্ন  </span> <br> <br> <q> Fortune smile upon those who are brave </q>",
     "<span style='color: blue;'>  সঙ্গ থেকে লোক চেনা যায়</span> <br> <br> <q> A man is known by the company he keeps </q>",
     "<span style='color: blue;'> যতক্ষণ শ্বাস ততক্ষণ আশ  </span> <br> <br>  <q> A drawning man <br>catches at a straw </q>",
     "<span style='color: blue;'>  সময়ের এক ফোঁড অসময়ের দশ ফোঁড</span> <br> <br><q> A stitch in time saves nine </q>",
     "<span style='color: blue;'>  বিপদের বন্ধুই প্রকৃত বন্ধু </span> <br> <br> <q> A friend in need<br> is a friend indeed </q>",
     "<span style='color: blue;'>  কাপুরষরা মরার আগেই মরে </span> <br> <br> <q> Cowards die many times before their death </q>",
     "<span style='color: blue; '> অলস মস্তিক শয়তানের কারখানা </span> <br> <br><q> An idle brain is the <br> devils workshop </q>",
     "<span style='color: blue;'>  প্রতিকারের চেয়ে প্রতিরোধ ভালো</span> <br> <br><q>  Prevention is better than cure </q>",
     "<span style='color: blue;'>  সুন্দর সব সময় আনন্দ দায়ক</span> <br> <br> <q> A thing of beauty is joy for ever </q>",
     "<span style='color: blue;'>  পরিশ্রম সৌভাগ্যের প্রসূতি</span> <br> <br> <q> Industry is the mother <br> of good luck </q>",
     "<span style='color: blue;'>  লোভে পাপ পাপে মৃত্যু </span> <br> <br> <q> Greed begets sin, <br>sin begets death </q>",
     "<span style='color: blue;'>  দুঃখের পর সুখ আসে </span> <br> <br>   <q> After clouds come fair weather </q>",
     "<span style='color: blue;'>  বৃক্ষ তার ফলে পরিচয়</span> <br> <br><q>  A tree is known by its fruit </q>",
     "<span style='color: blue;'>  ব্যর্থাতাই সাফল্যের ভিত্তি    </span> <br> <br><q>  Failure is the pillar of success </q>",
     "<span style='color: blue;'>    যার মাথা তার ব্যথা  </span> <br> <br><q> Uneasy lies the head that wears the crown </q>",
     "<span style='color: blue;'>  এ পৃথিবীতে কেউ কারোর জন্য নয় </span> <br> <br><q> None is none under the sun </q>",
     "<span style='color: blue;'>  সময় ও স্রোত কারোর জন্য অপেক্ষা করেনা </span> <br> <br><q> Time and tide wait for none </q>",
     "<span style='color: blue;'> চোরে না শুনে ধমের কাহিনী </span> <br> <br><q> A rogue is deaf to all good  </q>",
     "<span style='color: blue;'>   চোরে চোরে মাসতুতো ভাই   </span> <br> <br><q>  Birds of the same feather flock together </q>",
     "<span style='color: blue;'> চোর পালালে বুদ্ধি বাড়ে </span> <br> <br><q>  After death comes the doctor </q>",
     "<span style='color: blue;'>  ছেঁড়া চাটাইয়ে শুয়ে লাখ টাকার স্বপ্ন দেখা  </span> <br> <br><q> To build castle in the air </q>",
     "<span style='color: blue;'> জোর যার মুলক তার </span> <br> <br><q>  Might is right  </q>",
     "<span style='color: blue;'>   ঝোপ বুঝে কোপ মারা   </span> <br> <br><q> Make hay while the sun shines </q>",
     "<span style='color: blue;'>  ঢিলটি মারলে পাটকেলটি খেতে হয় / যেমন কুকুর, তেমন মুগুড় </span> <br> <br><q>  Tit for tat </q>",
     "<span style='color: blue;'>  তেলা মাথায় তেল দেয়া  </span> <br> <br><q> To carry coal to Newcastle  </q>",
     "<span style='color: blue;'> দুষ্ট গরুর চেয়ে শূন্য গোয়াল ভালো </span> <br> <br><q>  Better an empty house than a bad (OR, an ill) tenant  </q>",
     "<span style='color: blue;'>    নাই মামার চেয়ে কানা মামা ভালো </span> <br> <br><q> Something is better than nothing  </q>",
     "<span style='color: blue;'> নাচতে না জানলে উঠান বাঁকা </span> <br> <br><q> A bad workman quarrels with his tools  </q>",
     "<span style='color: blue;'>  নানা মুনির নানা মত </span> <br> <br><q> Many men, many minds </q>",
     "<span style='color: blue;'>  নিজের নাক কেটে পরের যাত্রা ভঙ্গ করা </span> <br> <br><q>  To cut off one's nose to spite one's face </q>",
     "<span style='color: blue;'>  পরের ফন্দ করতে গেলে নিজের মন্দ আগে ফলে </span> <br> <br><q> Harm hatch, harm catch  </q>",
     "<span style='color: blue;'>   পাননা তাই খাননা /  আঙ্গুর ফল টক </span> <br> <br><q> The grapes are sour </q>",
     "<span style='color: blue;'>  পাপের ধন প্রায়শ্চিত্তে যায় </span> <br> <br><q>Ill got, ill spent </q>",
     "<span style='color: blue;'>   বিনা মেঘে বজ্রপাত  </span> <br> <br><q> A bolt from the blue  </q>",
     "<span style='color: blue;'>  বজ্র আঁটুনি ফস্কা গিরো  </span> <br> <br><q>  The more laws, the more offenders  </q>",
     "<span style='color: blue;'>  ভাত খায় ফ্যান দিয়ে গল্প মারে দই </span> <br> <br><q>  Great boast, small roast </q>",
     "<span style='color: blue;'>    মানুষ ভাবে এক হয় আর এক  </span> <br> <br><q>  Man proposes but God disposes </q>",
     "<span style='color: blue;'> ভাগের মাগঙ্গা পায় না  </span> <br> <br><q>   Everybody's business is nobody's business </q>",
     "<span style='color: blue;'>   পানিতে কুমির, ডাঙ্গায় বাঘ  </span> <br> <br><q>  Between the devil and the deep sea </q>",
     "<span style='color: blue;'>   যেমন কর্ম তেমন ফল  </span> <br> <br><q>  As you sow, so you reap  </q>",
     "<span style='color: blue;'>    যত গর্জে তত বর্ষে না  </span> <br> <br><q> A barking dog never or seldom bites  </q>",
     "<span style='color: blue;'>    হাতের জিনিস ফেলে দূরের জিনিস নিতে নেই  </span> <br> <br><q>   A bird in the hand is worth two in the bush  </q>",
     "<span style='color: blue;'>  ঘর-পোড়া গরু সিন্দুরে মেঘ দেখলে ভয় পায়  </span> <br> <br><q>  A burnt child dreads the fire or Once bitten, twice shy </q>",
     // "<span style='color: blue;'>      </span> <br> <br><q>       </q>",
     // "<span style='color: blue;'>      </span> <br> <br><q>       </q>",
     // "<span style='color: blue;'>      </span> <br> <br><q>       </q>",
   ];
   


   // Function to get Proverb
   function getBanglaFact() {
     const randomIndex = Math.floor(Math.random() * banglaFacts.length);
     return banglaFacts[randomIndex];
   }
   
   // Display random Proverb
   const factElement = document.getElementById("banglaFact");
   factElement.innerHTML = getBanglaFact();  // Use innerHTML
   
   // Optional: refresh the fact on button click
   document.getElementById("newBanglaFactButton").addEventListener("click", () => {
     factElement.innerHTML = getBanglaFact();  // Use innerHTML
   });