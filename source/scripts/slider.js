const sliderList = document.querySelector('.hero__slider-list');
const slides = document.querySelectorAll('.hero__slider-item');
const prevButton = document.querySelector('.hero__slider-pagination-button--prev');
const nextButton = document.querySelector('.hero__slider-pagination-button--next');
const indicators = document.querySelectorAll('.hero__slider-pagination-indicator');

let currentIndex = 0;

const updateSlider = () => {
  const offset = -currentIndex * 100;
  sliderList.style.transform = `translateX(${offset}%)`;

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slides.length - 1;

  indicators.forEach((button, i) => {
    if (i === currentIndex) {
      button.classList.add('hero__slider-pagination-indicator--active');
    } else {
      button.classList.remove('hero__slider-pagination-indicator--active');
    }
  });
};

updateSlider();

const nextSlide = () => {
  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });
};

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

indicators.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
  });
});

export default nextSlide;
