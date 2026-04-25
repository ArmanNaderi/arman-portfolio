/* ============================================================
   SCROLL REVEAL — Intersection Observer
   Watches .reveal and .fade-in elements, adds .visible when
   they enter the viewport. 300ms CSS transition handles the rest.
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal, .fade-in').forEach((el) => {
  revealObserver.observe(el);
});

/* ============================================================
   MOBILE NAV — hamburger toggle
   ============================================================ */
const hamburger = document.querySelector('.nav-hamburger');
const mobileNav = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is tapped
mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================================
   NAV ACTIVE STATE — highlight current section in desktop nav
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => sectionObserver.observe(s));
