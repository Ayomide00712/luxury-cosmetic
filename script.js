
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

const sectionContainers = document.querySelectorAll(".section-container");

sectionContainers.forEach((container) => {
  const paragraph = container.querySelector(".section8-qest p");
  const arrowIcon = container.querySelector(".arrow-icon i");
  
  arrowIcon.addEventListener("click", () => {
    paragraph.classList.toggle("show");
    
    arrowIcon.classList.toggle("rotated");
  });
});

const hamburgerButton = document.querySelector('.hamburger-button');
    const navLinks = document.querySelector('.nav-links');

    hamburgerButton.addEventListener('click', () => {
      console.log('clcik')
      navLinks.classList.toggle('activee');
    });