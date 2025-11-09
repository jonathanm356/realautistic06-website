document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.nav-list a').forEach(a =>
  a.addEventListener('click', ()=> document.body.classList.remove('menu-open')));