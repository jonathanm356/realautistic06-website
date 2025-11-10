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

document.addEventListener('DOMContentLoaded', function () {
  try {
    var path = location.pathname.toLowerCase();
    if (!path.endsWith('/books.html') && !path.endsWith('books.html')) return;

    var sections = document.querySelectorAll('#content section');
    sections.forEach(function (sec) {
      var h2 = sec.querySelector('h2');
      if (!h2) return;

      // build panel
      var panel = document.createElement('div');
      panel.className = 'panel';
      while (h2.nextSibling) panel.appendChild(h2.nextSibling);
      sec.appendChild(panel);

      // a11y + UI
      h2.classList.add('collapser');
      h2.setAttribute('role', 'button');
      h2.setAttribute('tabindex', '0');
      h2.setAttribute('aria-expanded', 'false');

      function setOpen(open) {
        sec.classList.toggle('is-open', open);
        h2.setAttribute('aria-expanded', String(open));
        panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0';
      }
      function toggle() { setOpen(!sec.classList.contains('is-open')); }

      h2.addEventListener('click', toggle);
      h2.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });

    window.addEventListener('resize', function () {
      document.querySelectorAll('section.is-open .panel').forEach(function (p) {
        p.style.maxHeight = p.scrollHeight + 'px';
      });
    });
  } catch (e) {
    console.error('Collapse init failed:', e);
  }
});