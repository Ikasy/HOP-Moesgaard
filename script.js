// Gemmer historikken af overlays
const overlayHistory = [];

// Funktion til at åbne et specifikt overlay
function openOverlay(overlayId) {
    // Hvis der allerede er et åbent overlay, gemmes det i historikken
    const openOverlay = document.querySelector('.overlay[style*="display: flex"]');
    if (openOverlay) {
        overlayHistory.push(openOverlay.id);
    }

    // Lukker alle overlays
    closeOverlay();

    // Finder og viser det ønskede overlay
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.style.display = 'flex';

        // Tilføjer klik-hændelse til overlay for at lukke ved klik udenfor
        overlay.addEventListener('click', function (e) {
            if (e.target.classList.contains('overlay-background')) {
                closeOverlay();
            }
        });
    }
}

// Funktion til at lukke alle overlays
function closeOverlay() {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        overlay.style.display = 'none';
    });
}

// Funktion til at gå til tidligere overlay
function goBack() {
    // Hent det sidste overlay fra historikken
    const previousOverlayId = overlayHistory.pop();
    if (previousOverlayId) {
        closeOverlay();  // Lukker nuværende overlay
        openOverlay(previousOverlayId);  // Åbner tidligere overlay
    }
}














const heroTitle = document.getElementById("heroTitle");
const heroUnderTitle = document.getElementById("heroUnderTitle"); // Corrected ID
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
    "Stenalder",
    "Kriger"
];
let heroUnderTitles = [
    "11. okt. 2024 - 10. aug. 2025", 
    "Livet i fortidens landsbyer",
    "22. mar. 2024 - Efteråret 2025"
];
let heroBackgrounds = [
    "url('images/ModerJordHero.png') no-repeat center/cover",
    "url('images/muslingpige.webp') no-repeat left/cover",
    "url('images/KrigerHero.png') no-repeat center/cover"
];
let heroColors = [
    "#1A1A1A",
    "#F6F3EF"
]

let index = 0;

function updateHero() {
    heroTitle.innerHTML = heroTitles[index];
    heroUnderTitle.innerHTML = heroUnderTitles[index];
    hero.style.background = heroBackgrounds[index];
    hero.style.color = heroColors[index];
    dots.forEach(dot => {
        dot.style.background = "#F6F3EF";
    });
    dots[index].style.background ="unset"


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













updateHero();


