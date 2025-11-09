document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.nav-list a').forEach(a =>
  a.addEventListener('click', ()=> document.body.classList.remove('menu-open')));

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
