document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector('.burger')
    var headerNav = document.querySelector('.header__nav')
    burger.onclick = function() {
        burger.classList.toggle('burger_active')
        headerNav.classList.toggle('header__nav_active')
    }
})