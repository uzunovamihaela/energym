/* =============================================================
   ENERGYM — Navigation
   Handles: sticky header on scroll, mobile menu open/close
   ============================================================= */

  (function () {
  'use strict';

  const header     = document.getElementById('site-header');
  const navToggle  = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn   = document.getElementById('mobile-close');

  // ---- Sticky header shadow on scroll ----
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ---- Open / close mobile menu ----
  function openMenu() {
    mobileMenu.classList.add('open');
    navToggle.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  // Close on any mobile nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Expose closeMenu globally (used by inline onclick fallback)
  window.closeMobileMenu = closeMenu;
}
)();
