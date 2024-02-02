let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = 'block';  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function prevSlide() {
  if (slideIndex === 1) {
    slideIndex = slides.length;
  } else {
    slideIndex--;
  }
  showSlides();
}

function nextSlide() {
  if (slideIndex === slides.length) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }
  showSlides();
}

showSlides();
