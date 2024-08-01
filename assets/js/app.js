function animateButton(button) {
    // Add the 'clicked' class to trigger the animation
    button.classList.add('clicked');

    // Remove the 'clicked' class after the animation is done
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300); // Match the duration of the animation
}

function shootConfettiFromSides() {
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
}

// AOS initiation
AOS.init({
    duration: 700
});

window.addEventListener('load', shootConfettiFromSides);

//document.getElementById('weekly-leaderboard').addEventListener('scroll', shootConfettiFromSides);

// // Function to check if scrolled to the target position
// function hasScrolledToPosition() {
//     if (window.scrollY == 500) {
//         shootConfettiFromSides();
        
//         window.removeEventListener('scroll', checkScrollPosition);
//     }
// }

// // Optional: Add an event listener to check on scroll
// window.addEventListener('scroll', () => {
//     if (hasScrolledToPosition()) {
//         console.log('You have scrolled to or past the target position.');
//     }
// });

