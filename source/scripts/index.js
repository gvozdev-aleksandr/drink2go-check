const nav = document.querySelector('.main-nav');
const openButton = document.querySelector('.user-nav__button--toggle');

openButton.onclick = function () {
  nav.classList.toggle('main-nav--is-close');
};

