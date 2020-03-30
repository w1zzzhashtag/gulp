let burgerWrap = document.querySelector('.burger--wrap');
let headerMenu = document.querySelector('.header__menu--wrap');
let burger = document.querySelector('.burger');
burgerWrap.onclick = function() {
    headerMenu.classList.toggle('header__menu--active');
    burger.classList.toggle('burger--active');
    
}