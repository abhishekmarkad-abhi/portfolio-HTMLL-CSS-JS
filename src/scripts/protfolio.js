// MENU TOGGLE
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bi-x'); // toggle icon from list to cross
});

// REMOVE MENU ON LINK CLICK
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bi-x');
  });
});

// SCROLL ACTIVE NAV LINK
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let currentPos = window.scrollY + 100;
  sections.forEach(sec => {
    let top = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (currentPos >= top && currentPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
      });
    }
  });

  // Sticky header
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

// SCROLL TO TOP BUTTON (OPTIONAL)
const scrollTopBtn = document.querySelector('.footer-iconTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
});

// TYPED JS TEXT EFFECT
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "UI/UX Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// SCROLL REVEAL ANIMATIONS
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// SIMPLE FORM VALIDATION
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting me! I’ll get back to you soon.");
  this.reset();
});
