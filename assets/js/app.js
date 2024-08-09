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
    } else {
        navbar.classList.remove('shadow-sm');
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
