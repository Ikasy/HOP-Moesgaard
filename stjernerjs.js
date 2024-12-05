const scrollable = document.querySelector('.scrollable');
const hoeje = document.getElementById("hoeje");
const rune = document.getElementById("rune");

scrollable.addEventListener('wheel', function (event) {
    console.log(scrollable.scrollLeft); // Logs the vertical scroll position
    if (event.deltaY !== 0) {  // Kontrollerer, om der er en vertikal scroll
        this.scrollLeft += event.deltaY;  // Scroll horisontalt baseret på vertikal scroll
        event.preventDefault();  // Forhindrer standard vertikal scroll
    }
});


let animationTriggeredHoeje = false; // Prevent multiple triggers
let animationTriggeredRune = false; // Prevent multiple triggers

scrollable.addEventListener('scroll', function () {
    if (!animationTriggeredHoeje && scrollable.scrollLeft >= 750) {
        const paths = hoeje.querySelectorAll('path');
        paths.forEach((path) => {
            path.classList.add('animate-line');
        });
        animationTriggeredHoeje = true; // Prevent retriggering
    }
    if (!animationTriggeredRune && scrollable.scrollLeft >= 1500) {
        const paths = rune.querySelectorAll('path');
        paths.forEach((path) => {
            path.classList.add('animate-line');
        });
        animationTriggeredRune = true; // Prevent retriggering
    }
});