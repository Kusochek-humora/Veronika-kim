'use strict';
// import Typed from 'typed.js';
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
    const options = {
        strings: ['и просто <br> хороший <br> человек', 'мадик во френдзоне','ВУЛЬВА <br><s>ПИЗДА</s><br><s>ПИСЯ</s>'],
        typeSpeed: 100,       // Установите желаемую скорость набора символов
        backSpeed: 100,       // Скорость стирания текста
        startDelay: 2000,     // Задержка перед началом анимации
        backDelay: 1000,     // Задержка перед стиранием текста
        loop: true,          // Повторять анимацию
    };
    const typed = new Typed('#typed-text', options);

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