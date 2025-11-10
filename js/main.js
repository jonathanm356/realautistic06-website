document.documentElement.classList.remove('no-js');
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const body = document.body;

  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('menu-open');
    });
  }

  document.querySelectorAll('.nav-list a').forEach(a => {
    a.addEventListener('click', () => body.classList.remove('menu-open'));
  });
});