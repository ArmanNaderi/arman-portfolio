/* ============================================================
   Minimal interactivity: theme toggle, mobile nav, scroll-spy.
   No dependencies.
   ============================================================ */

/* ---------- THEME TOGGLE ---------- */
(function () {
  var toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

/* ---------- MOBILE NAV ---------- */
(function () {
  var burger = document.getElementById('hamburger');
  var mobile = document.getElementById('mobileNav');
  if (!burger || !mobile) return;
  burger.addEventListener('click', function () {
    var open = mobile.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  mobile.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobile.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ---------- SCROLL-SPY (home only) ---------- */
(function () {
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length) return;
  var sections = document.querySelectorAll('section[id], header[id]');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (a) { a.classList.remove('active'); });
        var active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(function (s) { obs.observe(s); });
})();
