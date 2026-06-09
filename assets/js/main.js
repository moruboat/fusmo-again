// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll: add solid bg when not at top
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 60
      ? 'rgba(10,22,40,0.98)'
      : 'rgba(10,22,40,0.85)';
  });
}
