document.documentElement.classList.remove('no-js');
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('no-js');
  const toggle = document.getElementById('menu-toggle');
  const body = document.body;
  const links = document.querySelectorAll('.nav-list a');

  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('menu-open');
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      body.classList.remove('menu-open');
    });
  });
});