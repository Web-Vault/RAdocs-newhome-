let currentSlide = 0;
let autoSlideInterval;

function updateVisibleSlides() {
          if (window.innerWidth <= 768) {
                    return 1; // Mobile view
          } else if (window.innerWidth <= 1024) {
                    return 2; // Tablet view
          } else {
                    return 3; // Desktop view
          }
}

function slide(direction) {
          const carouselInner = document.querySelector('.carousel-inner');
          const totalSlides = document.querySelectorAll('.carousel-page').length;
          const visibleSlides = updateVisibleSlides();

          currentSlide += direction;

          if (currentSlide < 0) {
                    currentSlide = totalSlides - visibleSlides;
          } else if (currentSlide > totalSlides - visibleSlides) {
                    currentSlide = 0;
          }

          const offset = -currentSlide * (100 / visibleSlides);
          carouselInner.style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
          autoSlideInterval = setInterval(() => {
                    slide(1);
          }, 3000); // Adjust the interval time as needed
}

function resetAutoSlide() {
          clearInterval(autoSlideInterval);
          startAutoSlide();
}

// Event listeners
window.addEventListener('resize', () => {
          currentSlide = 0;
          resetAutoSlide();
});

// Initialize
// slide(0);
startAutoSlide();




document.addEventListener('DOMContentLoaded', () => {
          const serviceInfos = document.querySelectorAll('.service');

          serviceInfos.forEach(serviceInfo => {
                    const infoParagraph = serviceInfo.querySelector('.info');
                    const serviceNextButton = serviceInfo.querySelector('.service-next');
                    const serviceNextImg = serviceNextButton.querySelector('img');

                    serviceInfo.addEventListener('mouseenter', () => {
                              infoParagraph.style.display = 'block';
                              infoParagraph.style.color = '#555';
                              serviceNextButton.style.backgroundColor = 'var(--green)';
                              serviceNextImg.src = 'images/arrow_forward_20dp_FILL0_wght400_GRAD0_opsz20(2).png';
                    });

                    serviceInfo.addEventListener('mouseleave', () => {
                              infoParagraph.style.display = 'none';
                              infoParagraph.style.color = '#fff';
                              serviceNextButton.style.backgroundColor = '#F2F5F7';
                              serviceNextImg.src = 'images/arrow_forward_20dp_FILL0_wght400_GRAD0_opsz20(1).png';

                    });
          });
});

document.addEventListener('DOMContentLoaded', () => {
          const navToggle = document.querySelector('.nav-toggle');
          const navbar = document.querySelector('.navbar');

          navToggle.addEventListener('click', () => {
                    navbar.classList.toggle('active');
          });
});


