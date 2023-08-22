// const footerContainer = document.querySelector('#copyright');

// var now = new Date();
// // например, выведем текущую дату в консоль
// // console.log(now.getFullYear());

// function clearPage(){
//     footerContainer.innerHTML = '';
// }

// const CopyrightTemplate = ` <section class="copyright">Анна Манько, Психолог рядом с Вами, %year%</section>`;
//     const year = CopyrightTemplate.replace('%year%', now.getFullYear());
//     footerContainer.innerHTML = year;
// // console.log(now.getFullYear());

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);