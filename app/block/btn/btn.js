var headerTelBtn = document.querySelector('.header__tel-btn')
var footerTelBtn = document.querySelector('.footer__tel-btn')
var modal = document.querySelector('.modal')
var modalClose = document.querySelector('.modal__close')
var mobileBtnFooter = document.querySelector('.mobile__btn-footer')
var mobileBtnHeader = document.querySelector('.mobile__btn-header')

document.addEventListener('click', function(e) {
    if(e.target == headerTelBtn || e.target == mobileBtnHeader) {
        burgerHeader.classList.remove('burger__header_active') /* переменная из burger.js */
        headerMobile.classList.remove('header__mobile_active') /* переменная из burger.js */
        modal.classList.remove('footer__modal_active')
        modal.classList.add('header__modal_active')
        
    } else if (e.target == footerTelBtn || e.target == mobileBtnFooter) {
        footerHeader.classList.remove('burger__footer_active') /* переменная из burger.js */
        footerMobile.classList.remove('footer__mobile_active') /* переменная из burger.js */
        modal.classList.remove('header__modal_active')
        modal.classList.add('footer__modal_active')
    } else if (e.target == modalClose) {
        e.preventDefault()
        modal.classList.remove('header__modal_active')
        modal.classList.remove('footer__modal_active')
    } else {
        
    }
})
