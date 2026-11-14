(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Comedy / Drama look
  var modeBtn = document.getElementById('mode');
  function setMode(m) {
    root.setAttribute('data-mode', m);
    modeBtn.setAttribute('aria-checked', m === 'comedy' ? 'true' : 'false');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', m === 'comedy' ? '#FFD23F' : '#15112B');
    try { localStorage.setItem('ab-mode', m); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('ab-mode'); } catch (e) {}
  if (saved === 'comedy' || saved === 'drama') setMode(saved);
  modeBtn.addEventListener('click', function () {
    setMode(root.getAttribute('data-mode') === 'comedy' ? 'drama' : 'comedy');
  });

  // Scroll reveal
  var items = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el, i) { el.style.transitionDelay = (i % 3) * 80 + 'ms'; io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Spotlight follows the pointer
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    var raf = 0, px = 0, py = 0;
    window.addEventListener('pointermove', function (e) {
      px = e.clientX; py = e.clientY;
      if (!raf) raf = requestAnimationFrame(function () {
        root.style.setProperty('--mx', px + 'px');
        root.style.setProperty('--my', py + 'px');
        raf = 0;
      });
    }, { passive: true });
  }

  // WhatsApp chat
  var fab = document.getElementById('chat-fab');
  var panel = document.getElementById('chat-panel');
  var closeBtn = document.getElementById('chat-close');
  var form = document.getElementById('chat-form');
  var PHONE = '917842078062';
  function toggle(open) {
    panel.hidden = !open;
    fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) document.getElementById('chat-name').focus();
  }
  fab.addEventListener('click', function () { toggle(panel.hidden); });
  closeBtn.addEventListener('click', function () { toggle(false); fab.focus(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { toggle(false); fab.focus(); } });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name.value.trim();
    var msg = form.elements.msg.value.trim();
    var topic = form.elements.topic.value;
    if (!name || !msg) return;
    var text = 'Hi Ali, I am ' + name + '.\nTopic: ' + topic + '\n\n' + msg;
    window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });
})();
