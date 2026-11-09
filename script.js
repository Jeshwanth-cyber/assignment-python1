// MOBILE NAVIGATION

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// SCROLL REVEAL ANIMATION

const elements = document.querySelectorAll(
    ".section-heading, .about-text, .detail-card, .skill-card, .project-card, .achievement-card, .contact-card"
);

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


elements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});
