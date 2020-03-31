var burgerWrap = document.querySelector('.burger--wrap');
var headerMenu = document.querySelector('.header__menu--wrap');
var burger = document.querySelector('.burger');
burgerWrap.onclick = function() {
    headerMenu.classList.toggle('header__menu--active');
    burger.classList.toggle('burger--active');
};