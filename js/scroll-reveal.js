/* =============================================================
   ENERGYM — Scroll Reveal
   Uses IntersectionObserver to add .visible to .reveal elements
   as they enter the viewport.
   ============================================================= */

(function () {
  'use strict';

  const revealEls = document.querySelectorAll('.reveal');

  // Immediately show elements already in view (above fold)
  function triggerVisible(el) {
    el.classList.add('visible');
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerVisible(entry.target);
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealEls.forEach(el => observer.observe(el));

  // Always trigger hero reveals immediately (they're above the fold)
  document.querySelectorAll('.hero .reveal').forEach(el => {
    setTimeout(() => triggerVisible(el), 150);
  });
})();
