/*
 * Category tab strips on /projects/, /portfolio/ and /venture-capital/.
 *
 * This lives in its own file rather than inline: the theme's compress.html
 * layout runs in production and collapses newlines, which turns any "//"
 * comment in an inline script into a comment covering the rest of the file.
 */
(function () {
  function init() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.cat-tab'));
    var panels = Array.prototype.slice.call(document.querySelectorAll('.cat-panel'));
    if (!tabs.length || !panels.length) return;

    /* Only hide panels once we know scripting works, so the page still reads without it. */
    document.body.classList.add('js-tabs');

    function show(id) {
      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', String(t.getAttribute('aria-controls') === id));
      });
      panels.forEach(function (p) { p.hidden = (p.id !== id); });
      if (history.replaceState) {
        history.replaceState(null, '', '#' + id.replace('panel-', ''));
      }
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { show(tab.getAttribute('aria-controls')); });
      tab.addEventListener('keydown', function (e) {
        var next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
        if (next === null) return;
        e.preventDefault();
        var t = tabs[(next + tabs.length) % tabs.length];
        t.focus();
        show(t.getAttribute('aria-controls'));
      });
    });

    /* Honour a category in the URL hash, otherwise open the first tab. */
    var wanted = 'panel-' + (location.hash || '').replace('#', '');
    var match = panels.filter(function (p) { return p.id === wanted; })[0];
    show(match ? match.id : panels[0].id);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
