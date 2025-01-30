

const newsArticles = [
    
    {
        title: "Elon Musk and Starlink are at its center.",
        description: "Elon Musk and Starlink are at its center. It differs from the 2020 Trump voting conspiracy theories in a crucial way.",
        image: "https://compote.slate.com/images/9d64fcf0-9396-4153-b203-9702369955b6.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1280", 
        url: "https://slate.com/news-and-politics/2024/11/trump-election-elon-musk-starlink-conspiracy-theory-voting.html",
        updatedAt: "2024-11-17T00:59:00Z" 
    },

        {
        title: "Apple Acknowledges iCloud Notes Disappearing and Explains How to Fix",
        description: "The latest blockbuster film has been met with rave reviews from both critics and fans alike.",
        image: "https://images.macrumors.com/t/jGG1TDYYCDA4OLNytQuXlZDvPAc=/800x0/article-new/2021/06/iCloud-General-Feature.jpg?lossy",
        url: "https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen",
        updatedAt: "2024-11-17T01:04:00Z"
    },

        {
        title: "Gmail Changes Leaked—2.5 Billion Users To Get New Email Address",
        description: "The question of who a given Gmail address really belongs to, and where the email sent to it goes, is something of a perennial problem for users of Google’s insanely popular email",
        image: "https://imageio.forbes.com/specials-images/imageserve/6572f1e5c6898fd9524d5474/Gmail-logo-on-a-smartphone-with-laptop-and-Gmail-web-client-open-behind/960x0.jpg?format=jpg&width=1440",
        url: "https://www.forbes.com/sites/zakdoffman/2024/11/15/googles-update-decision-this-completely-changes-gmail-on-your-phone/",
        updatedAt: "2024-11-17T01:20:00Z"
    },
    {
        title: "For Early Black Friday, Samsung Offers The Galaxy Tab S10 Ultra at up to 84% Off ",
        description: "Samsung has officially launched its early Black Friday offers and provides a great opportunity for tech enthusiasts to snag incredible deals across a wide array of products. This sale encompasses",
        image: "https://gizmodo.com/app/uploads/2024/11/galaxy-tab-s10-ultra-896x597.jpg",
        url: " ",
        updatedAt: "2024-11-17T01:42:20Z"
    },
    {
        title: "Laptop",
        description: "Laptop for new user.",
        image: "https://cdn.wccftech.com/wp-content/uploads/2024/11/Samsung-AR-glasses-1456x819.jpg",
        url: "https://www.zdnet.com/article/this-lenovo-2-in-1-is-the-ultraportable-work-laptop-ive-been-waiting-for/",
        updatedAt: "2024-11-17T01:57:38.613Z"
    },

];



        function timeAgo(date) {
            const now = new Date();
            const timeDiff = now - new Date(date); // Difference in milliseconds
            const seconds = Math.floor(timeDiff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            if (minutes < 1) {
                return `${seconds} sec ago`;
            } else if (minutes < 60) {
                return `${minutes} min ago`;
            } else if (hours < 24) {
                return `${hours} hr ago`;
            } else {
                return `${days} day ago`;
            }
        }

        // Function to display news articles on the page
        function displayNews(filteredArticles) {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; // Clear any existing news items

            // Sort the articles by the updatedAt date in descending order (newest first)
            filteredArticles.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

            // Loop through the sorted news articles and display each one
            filteredArticles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                
                newsItem.innerHTML = `
                    <img src="${article.image}" alt="${article.title}">
                    <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                    <p>${article.description}</p>
                    <p class="time-ago">${timeAgo(article.updatedAt)}</p>
                `;
                
                newsContainer.appendChild(newsItem);
            });
        }

        // Function to search news articles by title or description
        function searchNews() {
            const searchInput = document.getElementById('search-input').value.toLowerCase();
            const filteredArticles = newsArticles.filter(article => {
                return article.title.toLowerCase().includes(searchInput) || 
                       article.description.toLowerCase().includes(searchInput);
            });
            displayNews(filteredArticles);
        }

        // Run the function to display all news articles when the page loads
        window.onload = () => displayNews(newsArticles);