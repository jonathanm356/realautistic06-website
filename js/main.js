// @ts-nocheck
document.documentElement.classList.remove('no-js');
document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-ready');

  document.querySelectorAll('a[href]').forEach(a => {
    try{
      const url = new URL(a.getAttribute('href'), location.href);

      const sameOrigin = url.origin === location.origin;
      const samePage   = url.pathname === location.pathname && url.hash === '';
      const newTab     = a.target && a.target !== '_self';
      const download   = a.hasAttribute('download');

      if (!sameOrigin  samePage  newTab  download) return;

      a.addEventListener('click', e => {
        if (e.metaKey  e.ctrlKey  e.shiftKey  e.altKey) return; // let modifiers open new tabs
        e.preventDefault();
        document.body.classList.add('is-fading');
        setTimeout(() => { window.location.href = url.href; }, 250);
      });
    } catch {}
  });

  window.addEventListener('pageshow', () => {
    document.body.classList.remove('is-fading');
  });
});