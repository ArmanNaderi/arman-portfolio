/* theme toggle, mobile nav */
(function () {
  var t = document.getElementById('themeToggle');
  if (t) t.addEventListener('click', function () {
    var c = document.documentElement.getAttribute('data-theme');
    var n = c === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', n);
    try { localStorage.setItem('theme', n); } catch (e) {}
  });
})();
(function () {
  var b = document.getElementById('hamburger'), m = document.getElementById('mobileNav');
  if (!b || !m) return;
  b.addEventListener('click', function () {
    var o = m.classList.toggle('open');
    b.classList.toggle('open', o);
    b.setAttribute('aria-expanded', String(o));
  });
  m.querySelectorAll('a').forEach(function (l) {
    l.addEventListener('click', function () { m.classList.remove('open'); b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
  });
})();
