
// snow. uncomment in winter

// var snowmax=100
// var snowcolor=new Array("#b9dff5","#7fc7ff","#7fb1ff","#7fc7ff","#b9dff5", "#005ce6")
// var snowtype=new Array("Times")
// var snowletter="."
// var sinkspeed=0.4
// var snowmaxsize=40
// var snowminsize=15
// var snowingzone=1
// var snow=new Array()
// var marginbottom
// var marginright
// var timer
// var i_snow=0
// var x_mv=new Array();
// var crds=new Array();
// var lftrght=new Array();
// var browserinfos=navigator.userAgent
// var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
// var ns6=document.getElementById&&!document.all
// var opera=browserinfos.match(/Opera/)
// var browserok=ie5||ns6||opera

// function randommaker(range) {
//         rand=Math.floor(range*Math.random())
//     return rand
// }

// function initsnow() {
//         if (ie5 || opera) {
//                 marginbottom = document.body.scrollHeight
//                 marginright = document.body.clientWidth-15
//         }
//         else if (ns6) {
//                 marginbottom = document.body.scrollHeight
//                 marginright = window.innerWidth-15
//         }
//         var snowsizerange=snowmaxsize-snowminsize
//         for (i=0;i<=snowmax;i++) {
//                 crds[i] = 0;
//         //     lftrght[i] = Math.random()*15;
//             x_mv[i] = 0.03 + Math.random()/10;
//                 snow[i]=document.getElementById("s"+i)
//                 snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
//                 snow[i].size=randommaker(snowsizerange)+snowminsize
//                 snow[i].style.fontSize=snow[i].size+'px';
//                 snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
//                 snow[i].style.zIndex=1000
//                 snow[i].sink=sinkspeed*snow[i].size/5
//                 if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
//                 if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
//                 if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
//                 if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
//                 snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
//                 snow[i].style.left=snow[i].posx+'px';
//                 snow[i].style.top=snow[i].posy+'px';
//         }
//         movesnow()
// }

// function movesnow() {
//         for (i=0;i<=snowmax;i++) {
//                 crds[i] += x_mv[i];
//                 snow[i].posy+=snow[i].sink
//                 snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
//                 snow[i].style.top=snow[i].posy+'px';

//                 if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
//                         if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
//                         if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
//                         if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
//                         if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
//                         snow[i].posy=0
//                 }
//         }
//         var timer=setTimeout("movesnow()",50)
// }

// for (i=0;i<=snowmax;i++) {
//         document.write("<div id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</div>")
// }
// if (browserok) {
//         window.onload=initsnow
// }


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
const openContactButton = document.getElementById('contact');
const closeModalButton = document.getElementById('close-btn');
const modalWrapper = document.getElementById('modalWrapper');

openModalButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'block';
	document.body.style.overflow = 'hidden';
});

closeModalButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'none';
	document.body.style.overflow = 'visible';
});

openPersonalButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'block';
	document.body.style.overflow = 'hidden';
});

openFamilyButton.addEventListener('click', () =>{
	modalWrapper.style.display = 'block';
	document.body.style.overflow = 'hidden';
});

function showTest(){
	document.getElementById("test-preview").classList.add("hidden");
	document.getElementById("interactiveQuiz").classList.remove("hidden");
	document.getElementById("interactiveQuiz").classList.add("interactiveQuiz");
}


