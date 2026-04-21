const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header-container nav');
const navLinks = document.querySelectorAll('.header-container nav a');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});