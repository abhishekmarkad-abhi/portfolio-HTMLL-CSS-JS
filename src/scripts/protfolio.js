// Toggle mobile menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bi-x'); // Toggle between menu and close icon
});

// Remove active class on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
  menuIcon.classList.remove('bi-x');
};

// ScrollReveal animations
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content .skills', { origin: 'right' });

// Typed.js text animation
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'UI Designer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
