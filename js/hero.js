/* =============================================================
   ENERGYM — Hero Slideshow
   Handles: auto-advancing background slides + dot indicators
   ============================================================= */

(function () {
  'use strict';

  let current    = 0;
  let autoTimer  = null;
  const INTERVAL = 5000; // ms between slide changes

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next()  { goTo(current + 1); }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, INTERVAL);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  // Dot clicks
  /* dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      startAuto(); // reset timer on manual interaction
    });
  });
  */

  // Pause on hover over hero
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('mouseenter', stopAuto);
    heroEl.addEventListener('mouseleave', startAuto);
  }

  // Boot
  startAuto();
})();
