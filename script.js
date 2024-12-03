const heroTitle = document.getElementById("heroTitle");
const heroUnderTitle = document.getElementById("heroUnderTitle"); // Corrected ID
const hero = document.querySelector(".hero");
const dots = document.querySelectorAll(".dot");

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
    "url('images/moder-jord-moesgaard-museum-saerudstilling1920x1080.png') no-repeat center/cover",
    "url('images/muslingpige.png') no-repeat center/cover",
    "url('images/krigerne-m-hvid-tekst-test1920x1080.png') no-repeat center/cover"
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

updateHero();

