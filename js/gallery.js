/* =============================================================
   ENERGYM — Gallery Carousel
   Handles: prev/next buttons, dot indicators, auto-advance,
            touch/swipe support
   ============================================================= */

(function () {
  'use strict';

  const track    = document.getElementById('gallery-track');
  const slides   = track ? track.querySelectorAll('.gallery-slide') : [];
  const prevBtn  = document.getElementById('gallery-prev');
  const nextBtn  = document.getElementById('gallery-next');
  const dots     = document.querySelectorAll('.gallery-dot');

  if (!track || slides.length === 0) return;

  let current   = 0;
  let autoTimer = null;
  const INTERVAL = 3000;

  // ---- Move to slide ----
  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // ---- Auto-advance ----
  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, INTERVAL);
  }
  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  // ---- Button listeners ----
  prevBtn.addEventListener('click', () => { prev(); startAuto(); });
  nextBtn.addEventListener('click', () => { next(); startAuto(); });

  // ---- Dot listeners ----
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startAuto(); });
  });

  // ---- Touch / swipe support ----
  let touchStartX = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev();
      startAuto();
    }
  }, { passive: true });

  // ---- Pause on hover ----
  const carousel = document.querySelector('.gallery-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
  }

  // ---- Boot ----
  goTo(0);
  startAuto();
})();
