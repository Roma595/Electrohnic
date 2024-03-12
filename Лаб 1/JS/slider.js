var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides1(slideshow1.currentSlideIndex);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides2(slideshow2.currentSlideIndex);


// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideshow1.currentSlideIndex += n);
}

function plusSlides2(n) {
  showSlides2(slideshow2.currentSlideIndex += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideshow1.currentSlideIndex = n);
}
function currentSlide2(n) {
  showSlides2(slideshow2.currentSlideIndex = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideshow1.currentSlideIndex = 1}
  if (n < 1) {slideshow1.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow1.currentSlideIndex-1].style.display = "block";
  dots[slideshow1.currentSlideIndex-1].className += " active";
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideshow2.currentSlideIndex = 1}
  if (n < 1) {slideshow2.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow2.currentSlideIndex-1].style.display = "block";
  dots[slideshow2.currentSlideIndex-1].className += " active";
}