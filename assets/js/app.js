// Select the "Go to Top" button
const favoriteButtons = document.querySelectorAll('.btn-fav');

// Function to show clicked effect
favoriteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Add the 'clicked' class to trigger the animation on the clicked button
        button.classList.add('clicked');

        // Remove the 'clicked' class after the animation is done
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300); // Match the duration of the animation
    });
});

// Select the "Go to Top" button
const goTopButton = document.querySelector('.btn-go-to-top');

// Function to show or hide the "Go to Top" button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        goTopButton.classList.add('show');
    } else {
        goTopButton.classList.remove('show');
    }
});

// Select the navbar element
const navbar = document.querySelector('.navbar');

// Function to add or remove shadow effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('shadow-sm');
        navbar.classList.replace('bg-transparent', 'bg-white');
    } else {
        navbar.classList.remove('shadow-sm');
        navbar.classList.replace('bg-white', 'bg-transparent');

    }
});

// Function to show confetti
window.addEventListener('load', () => {
    // Confetti from left
    confetti({
        particleCount: 200,
        angle: 60,
        spread: 100,
        origin: { x: 0, y: 0.9 }
    });

    // Confetti from right
    confetti({
        particleCount: 100,
        angle: 120,
        spread: 100,
        origin: { x: 1, y: 0.9 }
    });
});

// AOS init
AOS.init({
    duration: 700
});



const apiKey = 'fd448bf94db043b48c2a3f0c228f8b0b';
const url = `https://newsapi.org/v2/everything?q=malaysian+cuisine&apiKey=${apiKey}&language=en`;

async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      data.articles.forEach(article => {
        console.log(article);
      });
      
    } catch (error) {
      console.error('Error:', error);
    }
}

function displayNews(articles) {
    const newsSection = document.getElementById('malaysian-cuisine-news');
}

// const apiKey = 'fd448bf94db043b48c2a3f0c228f8b0b'; // Replace with your actual NewsAPI key
// const sections = [
//     { title: 'Top Stories', query: 'top headlines' },
//     { title: 'Malaysian Cuisine', query: 'malaysian cuisine' },
//     { title: 'Food & Dining', query: 'food dining' }
// ];
// const initialDisplayCount = 3; // Number of news items to show initially per section

// async function fetchNews() {
//     const newsSection = document.getElementById('malaysian-cuisine-news');
//     newsSection.innerHTML = '<h1 class="text-center fw-bold mb-5">Malaysian Cuisine News</h1>';

//     for (const section of sections) {
//         const sectionElement = document.createElement('div');
//         sectionElement.className = 'news-section';
//         sectionElement.innerHTML = `
//             <h2>${section.title}</h2>
//             <div class="loading-spinner"></div>
//         `;
//         newsSection.appendChild(sectionElement);

//         try {
//             const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(section.query)}&apiKey=${apiKey}&language=en`;
//             const response = await fetch(url);
//             const data = await response.json();
//             const articles = data.articles.filter(article => article.urlToImage);
//             displayNews(articles.slice(0, initialDisplayCount), sectionElement, section);
//             if (articles.length > initialDisplayCount) {
//                 addViewMoreButton(sectionElement, articles, section);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             sectionElement.innerHTML += '<p class="text-center">Failed to load news. Please try again later.</p>';
//         }
//     }
// }

// function displayNews(articles, sectionElement, section) {
//     const newsGrid = document.createElement('div');
//     newsGrid.className = 'news-grid';

//     articles.forEach(article => {
//         const newsItem = document.createElement('div');
//         newsItem.className = 'news-item';
//         newsItem.innerHTML = `
//             <img src="${article.urlToImage}" alt="${article.title}">
//             <div class="news-item-content">
//                 <h5>${article.title}</h5>
//                 <p>${article.description}</p>
//             </div>
//         `;
//         newsItem.addEventListener('click', () => window.open(article.url, '_blank'));
//         newsGrid.appendChild(newsItem);
//     });

//     sectionElement.innerHTML = `<h2>${section.title}</h2>`;
//     sectionElement.appendChild(newsGrid);
// }

// function addViewMoreButton(sectionElement, articles, section) {
//     const viewMoreBtn = document.createElement('button');
//     viewMoreBtn.className = 'view-more-btn';
//     viewMoreBtn.textContent = 'View More';
//     viewMoreBtn.addEventListener('click', () => {
//         displayNews(articles, sectionElement, section);
//         viewMoreBtn.remove();
//     });
//     sectionElement.appendChild(viewMoreBtn);
// }

// fetchNews();


// const apiKey = 'fd448bf94db043b48c2a3f0c228f8b0b';
// const url = `https://newsapi.org/v2/everything?q=malaysian+cuisine&apiKey=${apiKey}&language=en`;

// async function fetchNews() {
//     const newsSection = document.getElementById('malaysian-cuisine-news');
//     newsSection.innerHTML = '<h1 class="text-center fw-bold mb-5">Malaysian Cuisine News</h1><div class="loading-spinner"></div>';

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data)
//         // displayNews(data.articles);
//     } catch (error) {
//         console.error('Error:', error);
//         newsSection.innerHTML += '<p class="text-center">Failed to load news. Please try again later.</p>';
//     }
// }

// function displayNews(articles) {
//     const newsSection = document.getElementById('malaysian-cuisine-news');
//     newsSection.innerHTML = '<h1 class="text-center fw-bold mb-5">Malaysian Cuisine News</h1>';
    
//     const newsContainer = document.createElement('div');
//     newsContainer.className = 'container';
    
//     const newsCard = document.createElement('div');
//     newsCard.className = 'card';
    
//     const cardBody = document.createElement('div');
//     cardBody.className = 'card-body p-4';

//     articles.forEach(article => {
//         if (article.urlToImage) {
//             const newsItem = document.createElement('div');
//             newsItem.className = 'd-flex mb-4 news-item';
//             newsItem.innerHTML = `
//                 <div class="me-4 flex-grow-1">
//                     <h5>${article.title}</h5>
//                     <p>${article.description}</p>
//                 </div>
//                 <img src="${article.urlToImage}" class="rounded-3" alt="${article.title}" style="width: 200px; height: 150px; object-fit: cover;">
//             `;
//             newsItem.style.cursor = 'pointer';
//             newsItem.addEventListener('click', () => window.open(article.url, '_blank'));
//             cardBody.appendChild(newsItem);
            
//             if (articles.indexOf(article) !== articles.length - 1) {
//                 const hr = document.createElement('hr');
//                 cardBody.appendChild(hr);
//             }
//         }
//     });

//     newsCard.appendChild(cardBody);
//     newsContainer.appendChild(newsCard);
//     newsSection.appendChild(newsContainer);
// }

// fetchNews();