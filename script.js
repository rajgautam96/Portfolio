// =========================
// PORTFOLIO JAVASCRIPT
// =========================



// =========================
// DOWNLOAD RESUME BUTTON
// =========================




// =========================
// CONTACT BUTTON SCROLL
// =========================

const contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("click", () => {

    document.querySelector(".contact").scrollIntoView({

        behavior: "smooth"

    });

});



// =========================
// NAVBAR SMOOTH SCROLL
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const sectionName = link.textContent.toLowerCase();

        if(sectionName === "home"){

            document.querySelector(".hero").scrollIntoView({
                behavior: "smooth"
            });

        }

        else if(sectionName === "about"){

            document.querySelector(".about").scrollIntoView({
                behavior: "smooth"
            });

        }

        else if(sectionName === "projects"){

            document.querySelector(".projects").scrollIntoView({
                behavior: "smooth"
            });

        }

        else if(sectionName === "contact"){

            document.querySelector(".contact").scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// =========================
// PROJECT CARD HOVER EFFECT
// =========================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });



    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});



// =========================
// CONTACT FORM
// =========================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});



// =========================
// SOCIAL ICON EFFECT
// =========================

const socialIcons = document.querySelectorAll(".social-icons i");

socialIcons.forEach((icon) => {

    icon.addEventListener("click", () => {

        alert("Social Link Coming Soon!");

    });

});



// =========================
// HIRE ME BUTTON
// =========================

const hireBtn = document.querySelector(".hire-btn");

hireBtn.addEventListener("click", () => {

    document.querySelector(".contact").scrollIntoView({

        behavior: "smooth"

    });

});



// =========================
// SCROLL ANIMATION
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#111111";

        navbar.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";

    }

    else{

        navbar.style.background = "transparent";

        navbar.style.boxShadow = "none";

    }

});// =========================
// VIEW RESUME
// =========================

const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", () => {

    window.open("ResumeE.2026.pdf", "_blank");

});