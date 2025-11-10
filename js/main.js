// @ts-nocheck
document.documentElement.classList.remove('no-js');
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(function () {
    document.body.style.opacity = 1;
  });

  var links = document.querySelectorAll('a[href]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(function () {
          window.location.href = href;
        }, 500);
      }
    });
  }
});