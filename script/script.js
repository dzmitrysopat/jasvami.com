/*
 * Общие скрипты сайта: меню, появление блоков при прокрутке, окно «связаться со мной», старт теста.
 * Скрипт безопасно работает на любой странице: если нужного элемента нет, он просто пропускается.
 */

// Блокировка прокрутки страницы, пока открыто меню или окно.
// Класс ставится на <html> (а не инлайн-стилем на <body>): так закреплённая шапка не «уезжает» в Safari на iPhone.
function lockScroll(lock) {
    document.documentElement.classList.toggle('scroll-lock', lock);
}

// вызывается из шапки (чекбокс бургер-меню)
function checkCheckbox() {
    var checkbox = document.getElementById('checkBurger');
    if (checkbox) lockScroll(checkbox.checked);
}

// плавное появление страницы
setTimeout(function () {
    document.body.classList.add('body_visible');
}, 0);

// появление блоков при прокрутке
(function () {
    var elements = document.querySelectorAll('.element-animation');
    if (!('IntersectionObserver' in window)) {
        Array.prototype.forEach.call(elements, function (el) { el.classList.add('element-show'); });
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('element-show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: [0.15] });
    Array.prototype.forEach.call(elements, function (el) { observer.observe(el); });
})();

// окно «связаться со мной»
(function () {
    var modal = document.getElementById('modalWrapper');
    if (!modal) return;

    function setModal(open) {
        modal.style.display = open ? 'block' : 'none';
        lockScroll(open);
    }

    ['consultation', 'personalConsultation', 'familyConsultation'].forEach(function (id) {
        var button = document.getElementById(id);
        if (button) button.addEventListener('click', function () { setModal(true); });
    });

    var closeButton = document.getElementById('close-btn');
    if (closeButton) closeButton.addEventListener('click', function () { setModal(false); });

    // клик по тёмному фону и клавиша Esc тоже закрывают окно
    modal.addEventListener('click', function (e) { if (e.target === modal) setModal(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.style.display === 'block') setModal(false); });
})();

// старт теста (кнопка «Начать»)
function showTest() {
    var preview = document.getElementById('test-preview');
    var quiz = document.getElementById('interactiveQuiz');
    if (preview) preview.classList.add('hidden');
    if (quiz) {
        quiz.classList.remove('hidden');
        quiz.classList.add('interactiveQuiz');
    }
}
