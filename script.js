let currentslide = 1;
showSlides(currentslide);

function myfunction(n) {
  showSlides(currentslide += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {currentslide = 1}    
  if (n < 1) {currentslide = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[currentslide-1].style.display = "block"; 
}
let y = document.querySelector(".container")   
y.addEventListener("mouseenter", show);
function show() {
    document.querySelector(".left").style.display = "inline";
    document.querySelector(".right").style.display = "inline";
}
y.addEventListener("mouseleave", function() {
    document.querySelector(".left").style.display = "none";
    document.querySelector(".right").style.display = "none";
})