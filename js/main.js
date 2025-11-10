// @ts-nocheck
document.documentElement.classList.remove('no-js');
document.getElementById('year').textContent = new Date().getFullYear();

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
