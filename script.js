const heroTitle = document.getElementById("heroTitle");
const heroUnderTitle = document.getElementById("heroUnderTitle"); // Corrected ID
const heroButton = document.getElementById("heroButton"); // Corrected ID
const newsletterCTA = document.getElementById("newsletterCTA"); // Corrected ID
const newsletterContent = document.getElementById("newsletterContent"); // Corrected ID
const newsletterinput = document.getElementById("newsletterinput"); // Corrected ID
const burgerMenu = document.getElementById("burgerMenu"); // Corrected ID
const email = document.getElementById("email"); // Corrected ID
const navIcon = document.getElementById("navIcon"); // Corrected ID
const hero = document.querySelector(".hero");
const header = document.querySelector("header");
const dots = document.querySelectorAll(".dot");
let timesClicked = 0
let heroTitles = [
    "Moder jord", 
    "Jernalderen",
    "Kriger"
];
let heroUnderTitles = [
    "11. okt. 2024 - 10. aug. 2025", 
    "Mød fortidens moselig",
    "22. mar. 2024 - Efteråret 2025"
];
let heroBackgrounds = [
    "url('images/ModerJordHero.png') no-repeat center/cover",
    "url('images/onkelgrauballe.jpg') no-repeat left/cover",
    "url('images/KrigerHero.png') no-repeat center/cover"
];

let heroLinks = [
    "moderjord.html",
    "jernalderen.html",
    "#"
]

let index = 0;

function updateHero() {
    heroTitle.innerHTML = heroTitles[index];
    heroUnderTitle.innerHTML = heroUnderTitles[index];
    hero.style.background = heroBackgrounds[index];
    dots.forEach(dot => {
        dot.style.background = "#F6F3EF";
    });
    dots[index].style.background ="unset"
    heroButton.href = heroLinks[index];


    index = (index + 1) % heroTitles.length;

    setTimeout(updateHero, 5000);
}

function openNewsletter(e){
    e.preventDefault();
    console.log(window.innerWidth)
    if(window.innerWidth < 600 && timesClicked <= 1){
        newsletterCTA.style.display = "block"
        newsletterContent.style.backgroundColor = "#fff"
        newsletterinput.style.width = "100%"
        newsletterContent.style.marginTop = "1rem"
        newsletterCTA.style.padding = "1rem 5%"
        newsletterCTA.style.height = "fit-content"
        email.style.display = "unset"
        email.style.width = "100%"
        timesClicked++
    }
    if (timesClicked == 2){
        email.value = '';
        const confirmationMessage = document.createElement('p');
        confirmationMessage.textContent = 'Du er nu tilmeldt nyhedsbrevet!';
        newsletterCTA.appendChild(confirmationMessage);
        setTimeout(() => {
            newsletterCTA.style.display = "flex";
            newsletterContent.style.backgroundColor = "";
            newsletterinput.style.width = "";
            newsletterContent.style.marginTop = "";
            newsletterCTA.style.padding = "";
            newsletterCTA.style.height = "";
            email.style.display = "none";
            email.style.width = "";
            timesClicked = 0;
            confirmationMessage.remove();
        }, 3000);
    }
   
}



function toggleBurger(e){
    e.preventDefault();
    burgerMenu.style.display = (burgerMenu.style.display === 'flex') ? 'none' : 'flex';
    header.style.backgroundColor = (header.style.backgroundColor === '#121212') ? '#121212cc' : '#121212';
    navIcon.classList.contains('fa-xmark') ? navIcon.classList.remove('fa-xmark') : navIcon.classList.add('fa-xmark');

}

document.addEventListener("DOMContentLoaded", () => {
    const exhibitContainers = document.querySelectorAll(".exhibitContainer");

    exhibitContainers.forEach(container => {
        const leftArrow = container.querySelector(".arrows svg:first-child");
        const rightArrow = container.querySelector(".arrows svg:last-child");
        const exhibits = container.querySelector(".exhibits");
console.log(exhibits.scrollWidth - exhibits.clientWidth);


        // Function to check the scroll position and toggle arrow visibility
        const updateArrowVisibility = () => {
            console.log(exhibits.scrollLeft);
            leftArrow.style.visibility = exhibits.scrollLeft > 0 ? "visible" : "hidden";
            rightArrow.style.visibility = exhibits.scrollLeft < exhibits.scrollWidth - exhibits.clientWidth - 1 ? "visible" : "hidden";

        };

        // Scroll left by a fixed amount
        leftArrow.addEventListener("click", () => {
            exhibits.scrollBy({
                left: -200,
                behavior: "smooth"
            });
        });

        // Scroll right by a fixed amount
        rightArrow.addEventListener("click", () => {
            exhibits.scrollBy({
                left: 200,
                behavior: "smooth"
            });
        });

        // Add a scroll event listener to update arrow visibility
        exhibits.addEventListener("scroll", updateArrowVisibility);

        // Initialize arrow visibility on page load
        updateArrowVisibility();
    });
});












updateHero();


