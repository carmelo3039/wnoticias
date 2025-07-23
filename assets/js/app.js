const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.remove('hide');
  navMenu.classList.add('show');
  menuToggle.setAttribute('aria-expanded', 'true');
  navMenu.setAttribute('aria-hidden', 'false');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
  navMenu.classList.add('hide');
  menuToggle.setAttribute('aria-expanded', 'false');
  navMenu.setAttribute('aria-hidden', 'true');
});

window.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove('show');
    navMenu.classList.add('hide');
    menuToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
  }
});
