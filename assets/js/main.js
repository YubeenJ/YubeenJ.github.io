'use strict';
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const menuLabel = document.querySelector('.menu-label');
  function setMenu(open) {
    sidebar.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    menuLabel.textContent = open ? 'Close' : 'Menu';
  }
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !sidebar.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
  });
  const breakpoint = window.matchMedia('(min-width: 761px)');
  breakpoint.addEventListener('change', () => setMenu(false));

  document.querySelectorAll('[data-research-figure]').forEach(image => {
    const showFigureStatus = () => {
      const figure = image.closest('figure');
      figure.querySelector('.research-figure-image').hidden = true;
      figure.querySelector('.figure-load-status').hidden = false;
    };
    image.addEventListener('error', showFigureStatus);
    if (image.complete && !image.naturalWidth) showFigureStatus();
  });

  const search = document.querySelector('#publication-search');
  if (search) {
    const publications = [...document.querySelectorAll('[data-publication]')];
    const filters = [...document.querySelectorAll('[data-filter]')];
    let selected = new URLSearchParams(window.location.search).get('filter') === 'first' ? 'first' : 'all';
    function updatePublications() {
      const words = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      let count = 0;
      for (const publication of publications) {
        const matches = (selected === 'all' || publication.dataset.first === 'true') && words.every(word => publication.dataset.search.includes(word));
        publication.hidden = !matches;
        if (matches) count++;
      }
      document.querySelector('#publication-status').textContent = `Showing ${count} ${count === 1 ? 'paper' : 'papers'}`;
      document.querySelector('#no-results').hidden = count !== 0;
    }
    search.addEventListener('input', updatePublications);
    filters.forEach(button => button.addEventListener('click', () => {
      selected = button.dataset.filter;
      filters.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      updatePublications();
    }));
    if (selected === 'first') {
      filters.forEach(button => {
        const active = button.dataset.filter === selected;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      updatePublications();
    }
  }
  const copy = document.querySelector('[data-copy-email]');
  if (copy) copy.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(copy.dataset.copyEmail);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Select and copy: ' + copy.dataset.copyEmail;
    }
  });
})();
