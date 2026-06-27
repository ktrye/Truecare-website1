const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => nav.classList.toggle('open'));
}

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});
