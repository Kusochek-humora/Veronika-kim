'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const openMenubtn = document.getElementById('open-menu'),
        closeMenubtn = document.getElementById('close-menu'),
        mobileMenu = document.getElementById('mobile-menu'),
        overlay = document.querySelector('.overlay');

    function openMenuHandler(e) {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
    }
    function closeMenuHandler(e) {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
    overlay.addEventListener('click', closeMenuHandler);
    openMenubtn.addEventListener('click', openMenuHandler);
    closeMenubtn.addEventListener('click', closeMenuHandler);



    const promoBg = document.getElementById('promo__bg'),
        promoSection = document.getElementById('promo');
    window.addEventListener('resize', function () {
        promoSection.setAttribute('style', `height:${promoBg.scrollHeight}px`);
    })
    // let options = {
    //     root: promoSection,
    //     rootMargin: "0px",
    //     threshold: 1.0,
    // };
    // let callback = function (entries, observer) {

    //     console.log('qweqwe')

    // };
    // let observer = new IntersectionObserver(callback, options);
    // observer.observe(promoBg);

})