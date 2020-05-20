var burgerHeader = document.querySelector('.burger__header')
var headerMobile = document.querySelector('.header__mobile')
var footerHeader = document.querySelector('.burger__footer')
var footerMobile = document.querySelector('.footer__mobile')
burgerHeader.onclick = function() {
    this.classList.toggle('burger__header_active')
    headerMobile.classList.toggle('header__mobile_active')
}
footerHeader.onclick = function() {
    this.classList.toggle('burger__footer_active')
    footerMobile.classList.toggle('footer__mobile_active')
}
