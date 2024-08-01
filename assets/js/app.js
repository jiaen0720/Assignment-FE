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

// Srcooling
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    if (this.scrollY > 0) {
        navbar.classList.add('shadow-sm')
    } else {
        navbar.classList.remove('shadow-sm')
    }
})

window.addEventListener('load', shootConfettiFromSides);
