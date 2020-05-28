var headerTelBtn = document.querySelector('.header__tel-btn')
var footerTelBtn = document.querySelector('.footer__tel-btn')
var modal = document.querySelector('.modal')
var modalClose = document.querySelector('.modal__close')
var mobileBtnFooter = document.querySelector('.mobile__btn-footer')
var mobileBtnHeader = document.querySelector('.mobile__btn-header')
var previewBtn = document.querySelector('.preview__btn')
var ourServicesBtn = document.querySelectorAll('.our-services__item-btn')
var popupBG = document.querySelector('.bg-popup')
var popup = document.querySelector('.popup__wrap')
var popupTitle = document.querySelector('.popup__title')
var popupSubtitle = document.querySelector('.popup__subtitle')
var popupClose = document.querySelector('.popup__close')
var dateTitleTextPopup = [
    'Услуги повара, шашлычника, грилье на выезд',
    'Предзаказ и доставка шашлыка и плова',
    'Предзаказ и доставка натуральных копчёностей',
]
var dateSubtitleTextPopup = [
    'от 10 порций',
    'Колбаска, мясо, грудинка, сало, котлеты, пельмени, пельмени,пельмени,пельмени',
]



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
    } 
    for(var i=0; i<ourServicesBtn.length; i++) {
        if(e.target == ourServicesBtn[i]) {
            popupBG.classList.add('bg-popup_active')
            popup.classList.add('popup__wrap_active')
            popupTitle.textContent = dateTitleTextPopup[i]
            popupSubtitle.textContent = dateSubtitleTextPopup[i-1]
        }
        else if (e.target == previewBtn) {
            popupBG.classList.add('bg-popup_active')
            popup.classList.add('popup__wrap_active')
            popupTitle.textContent = dateTitleTextPopup[0]
        } else if (e.target == popupBG || e.target == popupClose) {
            popupBG.classList.remove('bg-popup_active')
            popup.classList.remove('popup__wrap_active')
            popupSubtitle.textContent = ''
        }  
    } 
})
