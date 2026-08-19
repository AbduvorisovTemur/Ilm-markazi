// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// ================================
// CLOSE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ================================
// CONTACT FORM
// ================================

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const course = document.getElementById("course").value;

    if (!name || !phone || !course) {

        formMessage.textContent =
            "Iltimos, barcha kerakli maydonlarni to'ldiring.";

        return;
    }

    formMessage.textContent =
        "Arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.";

    form.reset();

});


// ================================
// HEADER SHADOW
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,.06)";

    } else {

        header.style.boxShadow = "none";

    }

});