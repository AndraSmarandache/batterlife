const galleryImages = [
  '../images/cakes-gallery.jpg',
  '../images/gallery3.jpg',
  '../images/gallery4.jpg',
  '../images/gallery5.jpg',
  '../images/gallery6.jpg'
];

let currentImageIndex = 0;
let isFading = false;
const galleryItem = document.querySelector('.gallery-item img');

function showPreviousImage() {
  if (isFading) return;
  isFading = true;
  galleryItem.classList.add('fade-out');
  setTimeout(() => {
      currentImageIndex = (currentImageIndex === 0) ? galleryImages.length - 1 : currentImageIndex - 1;
      galleryItem.src = galleryImages[currentImageIndex];
      galleryItem.classList.remove('fade-out');
      isFading = false;
  }, 300);
}

function showNextImage() {
  if (isFading) return;
  isFading = true;
  galleryItem.classList.add('fade-out');
  setTimeout(() => {
      currentImageIndex = (currentImageIndex === galleryImages.length - 1) ? 0 : currentImageIndex + 1;
      galleryItem.src = galleryImages[currentImageIndex];
      galleryItem.classList.remove('fade-out');
      isFading = false;
  }, 300);
}

function handleScroll() {
  const elements = document.querySelectorAll('.scroll-animation');
  elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.75) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(showNextImage, 3000);

  document.querySelector('.left-arrow').addEventListener('click', showPreviousImage);
  document.querySelector('.right-arrow').addEventListener('click', showNextImage);

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});