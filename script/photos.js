// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  



  function openModal01() {
    document.getElementById('myModal01').style.display = "block";
  }
  
  // Close the Modal
  function closeModal01() {
    document.getElementById('myModal01').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides01(slideIndex);
  
  // Next/previous controls
  function plusSlides01(m) {
    showSlides01(slideIndex += m);
  }
  
  // Thumbnail image controls
  function currentSlide01(m) {
    showSlides01(slideIndex = m);
  }
  
  function showSlides01(m) {
    var y;
    var slides = document.getElementsByClassName("mySlides01");
    // var dots = document.getElementsByClassName("demo");
    // var captionText = document.getElementById("caption");
    if (m > slides.length) {slideIndex = 1}
    if (m < 1) {slideIndex = slides.length}
    for (y = 0; y < slides.length; y++) {
      slides[y].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  }