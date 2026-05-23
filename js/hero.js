/* =============================================================
   ENERGYM — Hero Slideshow
   Handles: auto-advancing background slides + dot indicators
   ============================================================= */

(function () {
  'use strict';

  let current    = 0;
  let autoTimer  = null;
  const INTERVAL = 5000; // ms between slide changes

  function next()  { goTo(current + 1); }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, INTERVAL);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }



  // Pause on hover over hero
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('mouseenter', stopAuto);
    heroEl.addEventListener('mouseleave', startAuto);
  }

  // Boot
  startAuto();
})();
