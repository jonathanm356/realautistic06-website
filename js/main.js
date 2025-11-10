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

(function () {
  if (!/books.html$/i.test(location.pathname)) return;
  var sections = document.querySelectorAll('#content section');
  sections.forEach(function (sec) {
    var heading = sec.querySelector('h2');
    if (!heading) return;
    heading.classList.add('collapser');
    heading.setAttribute('role', 'button');
    heading.setAttribute('tabindex', '0');
    heading.setAttribute('aria-expanded', 'false');
    var panel = document.createElement('div');
    panel.className = 'panel';
    while (heading.nextSibling) panel.appendChild(heading.nextSibling);
    sec.appendChild(panel);
    function setOpen(open) {
      sec.classList.toggle('is-open', open);
      heading.setAttribute('aria-expanded', String(open));
      panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0';
    }
    function toggle() { setOpen(!sec.classList.contains('is-open')); }
    heading.addEventListener('click', toggle);
    heading.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
  window.addEventListener('resize', function () {
    document.querySelectorAll('section.is-open .panel').forEach(function (p) {
      p.style.maxHeight = p.scrollHeight + 'px';
    });
  });
})();