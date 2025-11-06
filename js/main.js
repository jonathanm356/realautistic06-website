document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('menu-btn')?.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});