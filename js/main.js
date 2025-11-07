document.getElementById('year').textContent = new Date().getFullYear();

const menu = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  navList.classList.toggle('active');
});