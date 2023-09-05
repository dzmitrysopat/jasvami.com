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
}, 0);

function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('element-show');
	  }
	});
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
	observer.observe(elm);
  }


const openModalButton = document.getElementById('consultation');
const openPersonalButton = document.getElementById('personalConsultation');
const openFamilyButton = document.getElementById('familyConsultation');
const closeModalButton = document.getElementById('close-btn');
const modalWrapper = document.getElementById('modalWrapper');

openModalButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'block';
	// document.body.style.overflow = 'hidden';
});

closeModalButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'none';
	// document.body.style.overflow = 'visible';
});

openPersonalButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'block';
	// document.body.style.overflow = 'hidden';
});

openFamilyButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'block';
	// document.body.style.overflow = 'hidden';
});

function showTest(){
	document.getElementById("test-preview").classList.add("hidden");
	document.getElementById("interactiveQuiz").classList.remove("hidden");
	document.getElementById("interactiveQuiz").classList.add("interactiveQuiz");
}
