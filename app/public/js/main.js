var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var preview = document.querySelector('.preview')
var previewContainer = document.querySelector('.preview__container')
var ourServices = document.querySelector('.our-services')
var ourServicesItems = document.querySelectorAll('.our-services__item')
var ourMenu = document.querySelector('.our-menu')
var ourMenuItems = document.querySelectorAll('.our-menu__item')
var advantages = document.querySelector('.advantages')
var advantagesItems = document.querySelectorAll('.advantages__item')
var company = document.querySelector('.company')
var companyImg = document.querySelector('.company__img_wrap')
var company__text = document.querySelector('.company__text')
var operationCondition = document.querySelector('.operation-condition')
var operationConditionItems = document.querySelectorAll('.operation-condition__item')
var feedback = document.querySelector('.feedback')
var feedbackInner = document.querySelector('.feedback__inner')
var request = document.querySelector('.request')
var requestTitle = document.querySelector('.request__title')
var requestForm = document.querySelector('.request__form')

function scrolling(e) {
    if(isPartiallyVisible(preview)) {
        previewContainer.classList.add('scrolling-element_active')
    } else {
        previewContainer.classList.remove('scrolling-element_active')
    }
    for (var i = 0; i < ourServicesItems.length; i++) {
        var ourServicesItem = ourServicesItems[i]
        if (isPartiallyVisible(ourServices)) {
            ourServicesItem.classList.add("scrolling-element_active");
            ourServices.querySelector('.title').classList.add("scrolling-element_active");
        } else {
            ourServicesItem.classList.remove("scrolling-element_active");
            ourServices.querySelector('.title').classList.remove("scrolling-element_active");
        }
    }

    for (var i = 0; i < ourMenuItems.length; i++) {
        var ourMenuItem = ourMenuItems[i]
        if (isPartiallyVisible(ourMenu)) {
            ourMenuItem.classList.add('scrolling-element_active')
            ourMenu.querySelector('.title').classList.add("scrolling-element_active");
            ourMenu.querySelector('.btn').classList.add("scrolling-element_active");
        } else {
            ourMenuItem.classList.remove("scrolling-element_active");
            ourMenu.querySelector('.title').classList.remove("scrolling-element_active");
            ourMenu.querySelector('.btn').classList.remove("scrolling-element_active");
        }
    }

    for (var i = 0; i < advantagesItems.length; i++) {
        var advantagesItem = advantagesItems[i]
        if (isPartiallyVisible(advantages)) {
            advantagesItem.classList.add('scrolling-element_active')
            advantages.querySelector('.title').classList.add("scrolling-element_active");
        }
        else {
            advantagesItem.classList.remove("scrolling-element_active");
            advantages.querySelector('.title').classList.remove("scrolling-element_active");
        }
    }

    if (isPartiallyVisible(company)) {
        companyImg.classList.add('scrolling-element_active')
        company__text.classList.add('scrolling-element_active')
        company.querySelector('.title').classList.add("scrolling-element_active");
    } else {
        companyImg.classList.remove('scrolling-element_active')
        company__text.classList.remove('scrolling-element_active')
        company.querySelector('.title').classList.remove("scrolling-element_active");
    }

    for (var i = 0; i < operationConditionItems.length; i++) {
        var operationConditionItem = operationConditionItems[i]
        if (isPartiallyVisible(operationCondition)) {
            operationConditionItem.classList.add('scrolling-element_active')
            operationCondition.querySelector('.title').classList.add("scrolling-element_active");
        } else {
            operationConditionItem.classList.remove('scrolling-element_active')
            operationCondition.querySelector('.title').classList.remove("scrolling-element_active");
        }
    }

    if (isPartiallyVisible(feedback)) {
        feedback.querySelector('.title').classList.add("scrolling-element_active");
        feedbackInner.classList.add("scrolling-element_active");
    } else {
        feedback.querySelector('.title').classList.remove("scrolling-element_active");
        feedbackInner.classList.remove("scrolling-element_active");
    }

    if (isPartiallyVisible(request)) {
        requestTitle.classList.add("scrolling-element_active");
        requestForm.classList.add("scrolling-element_active");
    } else {
        requestTitle.classList.remove("scrolling-element_active");
        requestForm.classList.remove("scrolling-element_active");
    }

}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}