const sliderList = document.querySelector('.hero__slider-list');
const slides = document.querySelectorAll('.hero__slider-item');
const prevButton = document.querySelector('.hero__slider-pagination-button--prev');
const nextButton = document.querySelector('.hero__slider-pagination-button--next');

let currentIndex = 0;

const updateSlider = () => {
  const offset = -currentIndex * 100;
  sliderList.style.transform = `translateX(${offset}%)`;

  if (currentIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentIndex === slides.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
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

export default nextSlide;
