document.querySelector('.scrollable').addEventListener('wheel', function (event) {
    if (event.deltaY !== 0) {  // Kontrollerer, om der er en vertikal scroll
        this.scrollLeft += event.deltaY;  // Scroll horisontalt baseret på vertikal scroll
        event.preventDefault();  // Forhindrer standard vertikal scroll
    }
});
