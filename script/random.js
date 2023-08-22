let imgs = ['/img/form/consultation-green-01.png', 
'/img/form/consultation-green-02.png', 
'/img/form/consultation-orange-01.png', 
'/img/form/consultation-orange-02.png']; //   Добавьте свои картинки через запятую
let i = Math.floor(Math.random() * imgs.length);
let not__found = document.getElementById("not__found");
imgsrc('img/form'); // Первоначальное заполнение картинки
not__found.window.onload = imgsrc;
function imgsrc() {
    not__found.src = imgs[i]; // Увеличить индекс лучше потом
    if (++i === imgs.length) i = 0;
}