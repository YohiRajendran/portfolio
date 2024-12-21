const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting and refreshing the page

        // Get form values
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const budget = document.querySelector('input[name="budget"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Basic validation (for demonstration)
        if (name && email && phone && budget && message) {
            // Simulate a successful form submission with a pop-up alert
            alert("Thank you for your message, " + name + "!");
            document.getElementById("contactForm").reset(); // Clear the form
        } else {
            // Simulate an error with an alert
            alert("Oops, please fill in all the fields.");
        }
    });
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".skill__content .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".skill__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".skill__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".skill__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".skill__card", {
  duration: 1000,
  interval: 500,
  delay: 2000,
});

const portfolio = document.querySelector(".portfolio__image");





const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});