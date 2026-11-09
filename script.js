// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});


// CLOSE NAVIGATION AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// AUTOMATIC FOOTER YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".section-heading, .about-container, .skill-card, .project-card, .achievement-card, .contact-card"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(function (element) {
    observer.observe(element);
});
