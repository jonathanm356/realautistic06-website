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

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('is-ready');
  var links = document.querySelectorAll('a[href]');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && this.target !== '_blank') {
        e.preventDefault();
        document.body.classList.add('is-fading');
        setTimeout(function () {
          window.location.href = href;
        }, 250);
      }
    });
  });
});
