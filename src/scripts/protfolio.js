// MENU TOGGLE
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bi-x');
  menuIcon.setAttribute('aria-expanded', navbar.classList.contains('active'));
});

// AUTO-CLOSE MENU ON NAV LINK CLICK
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bi-x');
    menuIcon.setAttribute('aria-expanded', 'false');
  });
});

// ACTIVE NAV LINK USING INTERSECTION OBSERVER
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`header nav a[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', entry.isIntersecting);
      }
    });
  },
  {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0.1
  }
);

sections.forEach(sec => observer.observe(sec));

// STICKY HEADER
window.addEventListener('scroll', () => {
  document.querySelector('header').classList.toggle('sticky', window.scrollY > 100);
});

// SCROLL TO TOP BUTTON
const scrollTopBtn = document.querySelector('.footer-iconTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    scrollTopBtn.style.opacity = window.scrollY > 500 ? '1' : '0';
    scrollTopBtn.style.transform = window.scrollY > 500 ? 'scale(1)' : 'scale(0)';
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// TYPED TEXT EFFECT
new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'UI/UX Designer', 'Web Developer'],
  typeSpeed: 90,
  backSpeed: 80,
  backDelay: 900,
  loop: true
});

// SCROLLREVEAL ANIMATIONS
ScrollReveal({ reset: false, distance: '60px', duration: 1500, delay: 200 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// FORM VALIDATION WITH UX FEEDBACK
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("input[name='name']");
    const email = contactForm.querySelector("input[name='email']");
    const message = contactForm.querySelector("textarea");

    const showError = (field, msg) => {
      alert(msg);
      field.focus();
      field.classList.add('error');
      setTimeout(() => field.classList.remove('error'), 1500);
    };

    if (!name.value.trim()) return showError(name, "Please enter your name.");
    if (!email.value.trim()) return showError(email, "Please enter your email.");
    if (!/^\S+@\S+\.\S+$/.test(email.value)) return showError(email, "Invalid email address.");
    if (!message.value.trim()) return showError(message, "Please enter a message.");

    alert("Thank you for contacting me! I’ll get back to you soon.");
    contactForm.reset();
  });
}

// DARK MODE TOGGLE + LOCAL STORAGE
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

if (darkModeToggle) {
  const enableDark = () => {
    body.classList.add('dark-mode');
    darkModeToggle.classList.replace('bi-moon', 'bi-sun');
    localStorage.setItem('theme', 'dark');
  };

  const disableDark = () => {
    body.classList.remove('dark-mode');
    darkModeToggle.classList.replace('bi-sun', 'bi-moon');
    localStorage.setItem('theme', 'light');
  };

  darkModeToggle.addEventListener('click', () => {
    body.classList.contains('dark-mode') ? disableDark() : enableDark();
  });

  // Load theme on page load
  if (localStorage.getItem('theme') === 'dark') enableDark();
}
