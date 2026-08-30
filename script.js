// ==========================================
// THE BEST FINANCE SERVICES
// JAVASCRIPT INTERACTIONS
// ==========================================


// MOBILE MENU
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED
document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        const navLinks = document.querySelector(".nav-links");

        navLinks.classList.remove("active");

    });

});


// SIMPLE SCROLL REVEAL ANIMATION
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.2
    }
);


// PREPARE SERVICE CARDS FOR ANIMATION
cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s ease";

    observer.observe(card);

});


// WELCOME MESSAGE IN CONSOLE
console.log("Welcome to The Best Finance Services!");
console.log("Building Better Financial Futures.");
