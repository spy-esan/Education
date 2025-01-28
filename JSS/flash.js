


document.addEventListener("DOMContentLoaded", () => {
    const cards = Array.from(document.querySelectorAll(".card"));
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentCardIndex = 0;
  
    // Shuffle cards array and rearrange the DOM
    const shuffleCards = () => {
      const shuffledCards = cards.sort(() => Math.random() - 0.5);
      const cardWrapper = document.querySelector(".card-wrapper");
      cardWrapper.innerHTML = ""; // Clear existing cards in the DOM
      shuffledCards.forEach(card => cardWrapper.appendChild(card)); // Append shuffled cards
    };
  
    // Show current card and hide others
    const updateCardVisibility = () => {
      cards.forEach((card, index) => {
        card.classList.toggle("active", index === currentCardIndex);
      });
    };
  
    // Show next card
    nextBtn.addEventListener("click", () => {
      currentCardIndex = (currentCardIndex + 1) % cards.length;
      updateCardVisibility();
    });
  
    // Show previous card
    prevBtn.addEventListener("click", () => {
      currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
      updateCardVisibility();
    });
  
    // Initial setup
    shuffleCards();
    updateCardVisibility();
  });
  