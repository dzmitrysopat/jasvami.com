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
}, 500);

const openModalButton = document.getElementById('consultation');
const closeModalButton = document.getElementById('close-btn');
const modalWrapper = document.getElementById('modalWrapper');

openModalButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'block';
	document.body.style.overflow = 'hidden';
	document.getElementById('modalWrapper').classList.add('body_visible');
	setTimeout(function(){
		document.getElementById('modalWrapper').classList.add('body_visible');
	}, 500);
});

closeModalButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'none';
});
