import nextSlide from "./slider";
const nav = document.querySelector('.main-nav');
const openButton = document.querySelector('.user-nav__button--toggle');
const breakpoint = 768;

nextSlide();

openButton.addEventListener('click', (evt) => {
  evt.stopPropagation();
  nav.classList.toggle('main-nav--is-close');
});

function handleResize() {
  if (window.innerWidth >= breakpoint) {
    nav.classList.remove('main-nav--is-close');
  } else {
    nav.classList.add('main-nav--is-close');
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('DOMContentLoaded', handleResize);

const slider = document.getElementById('price-slider');
const inputMin = document.getElementById('input-min');
const inputMax = document.getElementById('input-max');

// создаём слайдер
noUiSlider.create(slider, {
  start: [0, 900],        // начальные значения
  connect: true,          // закрашиваем область между бегунками
  range: {
    'min': 0,
    'max': 1000
  },
  step: 10
});

// обновляем поля при движении бегунков
slider.noUiSlider.on('update', (values, handle) => {
  const value = Math.round(values[handle]);
  if (handle === 0) {
    inputMin.value = value;
  } else {
    inputMax.value = value;
  }
});

// обновляем бегунки при изменении полей
inputMin.addEventListener('change', () => {
  slider.noUiSlider.set([inputMin.value, null]);
});
inputMax.addEventListener('change', () => {
  slider.noUiSlider.set([null, inputMax.value]);
});

