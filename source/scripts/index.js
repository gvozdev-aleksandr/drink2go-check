const nav = document.querySelector('.main-nav');
const openButton = document.querySelector('.user-nav__button--toggle');
const breakpoint = 768;

openButton.addEventListener('click', (evt) => {
  evt.stopPropagation();
  nav.classList.toggle('main-nav--is-close');
});

document.addEventListener('click', (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnButton = openButton.contains(event.target);

  if (!isClickInsideNav && !isClickOnButton) {
    nav.classList.add('main-nav--is-close');
  }
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

