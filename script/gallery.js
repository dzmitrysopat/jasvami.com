/*
 * Универсальный просмотрщик изображений (lightbox) + галереи дипломов и сертификатов.
 *
 * Списки хранятся в data/diplomas.json и data/conferences.json (см. data/README.md):
 *   <div class="gallery" data-gallery="diplomas" data-src="./data/diplomas.json" data-base="./img/diplomas/"></div>
 * Новый документ = одна строка в JSON + файл картинки. Подгонять размеры не нужно:
 * изображение вписывается в экран целиком, клик/тап увеличивает его до натурального размера.
 * Если файла картинки нет, плитка скрывается; если JSON пуст или недоступен, блок скрывается.
 *
 * Галерею можно собрать и вручную (без JSON): внутрь <div class="gallery" data-gallery="..."> положить
 *   <a class="gallery-item" href="файл" data-caption="Подпись"><img src="файл" alt="Подпись" loading="lazy"></a>
 */
(function () {
  'use strict';

  var galleries = document.querySelectorAll('[data-gallery]');
  if (!galleries.length) return;

  var overlay, stage, imgEl, capEl, countEl, btnPrev, btnNext, btnClose;
  var items = [];
  var index = 0;
  var opener = null;
  var isOpen = false;
  var prevHtmlOverflow = '';
  var touchX = 0, touchY = 0, touchActive = false;

  // ---------- плитки: из JSON (data-src) или из готовой разметки ----------
  function watchBroken(a) {
    var img = a.querySelector('img');
    if (!img) return;
    var hide = function () { a.hidden = true; };
    img.addEventListener('error', hide);
    if (img.complete && img.naturalWidth === 0 && img.currentSrc) hide();
  }

  function render(g, list) {
    var base = g.getAttribute('data-base') || '';
    var frag = document.createDocumentFragment();
    list.forEach(function (it) {
      if (!it || !it.file) return;
      var title = it.title || '';
      var a = document.createElement('a');
      a.className = 'gallery-item';
      a.href = base + it.file;
      a.setAttribute('data-caption', title);
      var img = document.createElement('img');
      img.src = base + it.file;
      img.alt = title;
      img.loading = 'lazy';
      img.decoding = 'async';
      a.appendChild(img);
      frag.appendChild(a);
      watchBroken(a);
    });
    g.appendChild(frag);
  }

  function loadJson(g) {
    var url = g.getAttribute('data-src');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      var list = null;
      if (xhr.status === 200) {
        try { list = JSON.parse(xhr.responseText); }
        catch (err) { if (window.console) console.error('gallery: ошибка в JSON «' + url + '»: ' + err.message); }
      } else if (window.console) {
        console.error('gallery: не удалось загрузить «' + url + '» (HTTP ' + xhr.status + ')' +
          (location.protocol === 'file:' ? '. Страница открыта как file:// — нужен локальный сервер.' : ''));
      }
      if (Array.isArray(list) && list.length) render(g, list);
      else {
        // нечего показывать: прячем весь блок вместе с заголовком, чтобы не оставалось пустого места
        var box = g.closest('.main-container');
        if (box) box.style.display = 'none';
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  }

  Array.prototype.forEach.call(galleries, function (g) {
    if (g.hasAttribute('data-src')) loadJson(g);
    else Array.prototype.forEach.call(g.querySelectorAll('.gallery-item'), watchBroken);

    g.addEventListener('click', function (e) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest ? e.target.closest('.gallery-item') : null;
      if (!a || !g.contains(a)) return;
      e.preventDefault();
      var list = Array.prototype.filter.call(g.querySelectorAll('.gallery-item'), function (x) { return !x.hidden; });
      open(list, list.indexOf(a), a);
    });
  });

  // ---------- построение оверлея (один раз) ----------
  function build() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.hidden = true;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Просмотр изображения');
    overlay.innerHTML =
      '<div class="lightbox-bar">' +
        '<span class="lightbox-count" aria-live="polite"></span>' +
        '<button type="button" class="lightbox-btn lightbox-close" aria-label="Закрыть">&times;</button>' +
      '</div>' +
      '<div class="lightbox-stage">' +
        '<img class="lightbox-img" alt="" draggable="false">' +
      '</div>' +
      '<button type="button" class="lightbox-btn lightbox-nav lightbox-prev" aria-label="Предыдущее">&#10094;</button>' +
      '<button type="button" class="lightbox-btn lightbox-nav lightbox-next" aria-label="Следующее">&#10095;</button>' +
      '<p class="lightbox-caption"></p>';
    document.body.appendChild(overlay);

    stage    = overlay.querySelector('.lightbox-stage');
    imgEl    = overlay.querySelector('.lightbox-img');
    capEl    = overlay.querySelector('.lightbox-caption');
    countEl  = overlay.querySelector('.lightbox-count');
    btnPrev  = overlay.querySelector('.lightbox-prev');
    btnNext  = overlay.querySelector('.lightbox-next');
    btnClose = overlay.querySelector('.lightbox-close');

    btnClose.addEventListener('click', function () { close(); });
    btnPrev.addEventListener('click', function () { go(-1); });
    btnNext.addEventListener('click', function () { go(1); });

    // клик по затемнённому фону закрывает, клик по картинке — увеличивает/уменьшает
    stage.addEventListener('click', function (e) {
      if (e.target === imgEl) toggleZoom();
      else if (!overlay.classList.contains('is-zoomed')) close();
    });

    // свайпы
    stage.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1 || overlay.classList.contains('is-zoomed')) { touchActive = false; return; }
      touchActive = true;
      touchX = e.touches[0].clientX;
      touchY = e.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (!touchActive || !e.changedTouches.length) return;
      touchActive = false;
      var dx = e.changedTouches[0].clientX - touchX;
      var dy = e.changedTouches[0].clientY - touchY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    }, { passive: true });

    imgEl.addEventListener('load', function () { overlay.classList.remove('is-loading'); });
    imgEl.addEventListener('error', function () {
      overlay.classList.remove('is-loading');
      capEl.textContent = 'Не удалось загрузить изображение';
    });

    document.addEventListener('keydown', onKey);
    window.addEventListener('popstate', function () { if (isOpen) hide(); });
  }

  // ---------- логика ----------
  function open(list, i, from) {
    if (!overlay) build();
    items = list;
    opener = from || null;
    isOpen = true;
    prevHtmlOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    overlay.hidden = false;
    // кнопка «Назад» на телефоне закрывает просмотрщик, а не уходит со страницы
    try { history.pushState({ lightbox: true }, ''); } catch (err) {}
    show(i);
    btnClose.focus();
  }

  function show(i) {
    index = (i + items.length) % items.length;
    var a = items[index];
    var img = a.querySelector('img');
    var caption = a.getAttribute('data-caption') || (img && img.alt) || '';

    overlay.classList.remove('is-zoomed');
    overlay.classList.add('is-loading');
    stage.scrollTop = 0; stage.scrollLeft = 0;
    imgEl.src = a.getAttribute('href');
    imgEl.alt = caption;
    capEl.textContent = caption;
    countEl.textContent = (index + 1) + ' / ' + items.length;

    var single = items.length < 2;
    btnPrev.hidden = single;
    btnNext.hidden = single;

    // подгружаем соседей, чтобы листание было мгновенным
    if (!single) {
      [index - 1, index + 1].forEach(function (n) {
        var neighbour = items[(n + items.length) % items.length];
        if (neighbour) (new Image()).src = neighbour.getAttribute('href');
      });
    }
  }

  function go(step) { if (items.length > 1) show(index + step); }

  function toggleZoom() { overlay.classList.toggle('is-zoomed'); stage.scrollTop = 0; stage.scrollLeft = 0; }

  function hide() {
    if (!isOpen) return;
    isOpen = false;
    overlay.hidden = true;
    imgEl.removeAttribute('src');
    document.documentElement.style.overflow = prevHtmlOverflow;
    if (opener && document.contains(opener)) opener.focus();
  }

  function close() {
    if (!isOpen) return;
    if (history.state && history.state.lightbox) history.back(); // popstate вызовет hide()
    else hide();
  }

  function onKey(e) {
    if (!isOpen) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    else if (e.key === 'Tab') {
      // фокус остаётся внутри окна
      var f = [btnClose, btnPrev, btnNext].filter(function (b) { return !b.hidden; });
      var pos = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(pos + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  }
})();
