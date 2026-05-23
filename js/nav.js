/* =============================================================
   ENERGYM — Navigation
   ============================================================= */

(function () {
  'use strict';

  const header     = document.getElementById('site-header');
  const navToggle  = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn   = document.getElementById('mobile-close');

  if (!header || !navToggle || !mobileMenu || !closeBtn) return;

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function openMenu() {
    mobileMenu.style.display = 'flex';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        mobileMenu.classList.add('open');
      });
    });
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    mobileMenu.addEventListener('transitionend', function hide() {
      if (!mobileMenu.classList.contains('open')) {
        mobileMenu.style.display = 'none';
      }
      mobileMenu.removeEventListener('transitionend', hide);
    });
  }

  navToggle.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  window.closeMobileMenu = closeMenu;
})();