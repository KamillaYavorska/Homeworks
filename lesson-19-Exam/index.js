const burgerBtn = document.getElementById('js-burger');
const headerNavigation = document.getElementById('js-header-navigation');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--open')
  headerNavigation.classList.toggle('header__navigation--show')
})