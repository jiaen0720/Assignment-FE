
function animateButton(button) {
    // Add the 'clicked' class to trigger the animation
    button.classList.add('clicked');
    
    // Remove the 'clicked' class after the animation is done
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300); // Match the duration of the animation
}

// AOS initiation
AOS.init({
    duration: 700
});