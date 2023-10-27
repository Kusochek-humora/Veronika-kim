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



    // const promoBg = document.getElementById('promo__bg'),
    //     promoSection = document.getElementById('promo'),
    //     root = document.documentElement,
    //     primaryColor = getComputedStyle(root).getPropertyValue('--heihgt');
    // function heightUpdate(bg, section) {
    //     section.setAttribute('style', `height:${bg.scrollHeight}px`);
    // }
    // heightUpdate(promoBg, promoSection);
    // window.addEventListener('resize', () => {
    //     root.style.setProperty('--heihgt', `${promoBg.scrollHeight}px`);
    // })
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