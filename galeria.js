document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector('.gallery');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeLightbox = document.querySelector('.close');
    const imageContainers = Array.from(document.querySelectorAll('.image-container img'));
    let lightboxIndex = 0;
  
    function openLightbox(index) {
      lightboxImage.src = imageContainers[index].src;
      lightbox.style.display = 'flex';
      lightboxIndex = index;
    }
  
    closeLightbox.addEventListener('click', function () {
      lightbox.style.display = 'none';
    });
  
    prevButton.addEventListener('click', function () {
      lightboxIndex = (lightboxIndex - 1 + imageContainers.length) % imageContainers.length;
      lightboxImage.src = imageContainers[lightboxIndex].src;
    });
  
    nextButton.addEventListener('click', function () {
      lightboxIndex = (lightboxIndex + 1) % imageContainers.length;
      lightboxImage.src = imageContainers[lightboxIndex].src;
    });
  
    imageContainers.forEach((image, index) => {
      image.addEventListener('click', () => {
        openLightbox(index);
      });
    });
  
    lightbox.addEventListener('click', function (event) {
      if (event.target.classList.contains('lightbox')) {
        lightbox.style.display = 'none';
      }
    });
  });
  
