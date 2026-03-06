// ========== HAMBURGER MENU ==========
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ========== NAVBAR SCROLL EFFECT & ACTIVE LINK ==========
const sections = document.querySelectorAll('section, .hero');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

window.addEventListener('scroll', () => {
  // Shrink navbar on scroll
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);

  // Update active nav link based on scroll position
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 200;
    if (scrollY >= top) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ========== SCROLL REVEAL ANIMATION ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
