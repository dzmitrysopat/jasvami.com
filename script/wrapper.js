/*
 * Подключение общих блоков (шапка и подвал) в обычных .html-страницах: без PHP и без сборки.
 *
 *   <div w3-include-html="../pages/wrapper/header.html"></div>
 *   ...
 *   <script>includeHTML();</script>
 *
 * Адреса в самих блоках (pages/wrapper/header.html, footer.html) пишутся относительно КОРНЯ САЙТА
 * (../../index.html, ../../img/..., ../../docs/...): после загрузки скрипт сам превращает их в
 * правильные адреса, где бы ни лежал сайт (корень домена, подпапка, GitHub Pages) и на какой бы
 * глубине ни была страница. Корень определяется по адресу этого файла (…/script/wrapper.js).
 *
 * Если блоки не появились, откройте консоль браузера (F12): там будет написано, какой файл
 * не загрузился. Частые причины: страница открыта двойным кликом (file://, браузер запрещает
 * загрузку файлов, нужен локальный сервер), неверный путь в w3-include-html, файл не залит на хостинг.
 */
(function () {
  var SITE_ROOT = '';

  (function detectRoot() {
    var src = document.currentScript && document.currentScript.src;
    if (!src) {
      var list = document.getElementsByTagName('script');
      for (var i = 0; i < list.length; i++) {
        if (/\/script\/wrapper\.js(\?.*)?$/.test(list[i].src)) { src = list[i].src; break; }
      }
    }
    if (src) SITE_ROOT = src.replace(/script\/wrapper\.js(\?.*)?$/, '');
  })();

  function isRelative(url) {
    return !!url && !/^([a-z][a-z0-9+.\-]*:|\/|#)/i.test(url);
  }

  // ../../pages/about.html -> https://site/pages/about.html
  function fromRoot(url) {
    return SITE_ROOT + url.replace(/^(\.{1,2}\/)+/, '');
  }

  function prepare(text) {
    // DOMParser создаёт «неактивный» документ: ничего не грузится, пока адреса не исправлены
    var doc = new DOMParser().parseFromString(text, 'text/html');
    if (SITE_ROOT) {
      [['a', 'href'], ['link', 'href'], ['img', 'src'], ['script', 'src']].forEach(function (pair) {
        Array.prototype.forEach.call(doc.querySelectorAll(pair[0] + '[' + pair[1] + ']'), function (el) {
          var value = el.getAttribute(pair[1]);
          if (isRelative(value)) el.setAttribute(pair[1], fromRoot(value));
        });
      });
    }
    return doc;
  }

  function insert(target, doc) {
    // блоки шапки и подвала самодостаточны, но если в <head> блока указаны стили, подключаем недостающие
    var have = {};
    Array.prototype.forEach.call(document.querySelectorAll('link[rel="stylesheet"]'), function (l) { have[l.href] = true; });
    Array.prototype.forEach.call(doc.querySelectorAll('head link[rel="stylesheet"]'), function (l) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = l.getAttribute('href');
      if (have[link.href]) return;
      have[link.href] = true;
      document.head.appendChild(link);
    });
    target.innerHTML = doc.body.innerHTML;
  }

  function load(target, file) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        insert(target, prepare(xhr.responseText));
        includeHTML(); // вложенные подключения, если есть
      } else {
        var hint = location.protocol === 'file:'
          ? ' Страница открыта как file:// — запустите локальный сервер (например, расширение Live Server в VS Code или «python -m http.server»).'
          : '';
        if (window.console) console.error('includeHTML: не удалось загрузить «' + file + '» (HTTP ' + xhr.status + ').' + hint);
      }
    };
    xhr.open('GET', file, true);
    xhr.send();
  }

  function includeHTML() {
    var all = document.getElementsByTagName('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      var file = el.getAttribute('w3-include-html');
      if (file) {
        el.removeAttribute('w3-include-html'); // сразу, чтобы повторный вызов не запросил файл ещё раз
        load(el, file);
      }
    }
  }

  window.includeHTML = includeHTML;
  document.addEventListener('DOMContentLoaded', includeHTML);
})();
