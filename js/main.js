(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Responsive mobile navigation
  var menuButton = document.getElementById('menu-toggle');
  var nav = document.getElementById('primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  // Rotate through the six supplied professional identities.
  var roleNode = document.getElementById('rotating-role');
  var roles = [
    'Social Media Content Creator',
    'Professional Video Editor',
    'Social Media Influencer',
    'Social Worker',
    'Political Worker',
    'Social Media Filmmaker'
  ];
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (roleNode && !reducedMotion) {
    var roleIndex = 0;
    window.setInterval(function () {
      roleIndex = (roleIndex + 1) % roles.length;
      roleNode.style.opacity = '0';
      window.setTimeout(function () {
        roleNode.textContent = roles[roleIndex];
        roleNode.style.opacity = '1';
      }, 180);
    }, 2800);
    roleNode.style.transition = 'opacity .18s ease';
  }

  // Scroll reveals; content remains visible when IntersectionObserver is unavailable.
  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = (index % 3) * 70 + 'ms';
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  // Close the mobile menu with Escape.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menuButton && nav) {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      menuButton.focus();
    }
  });
})();