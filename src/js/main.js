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

    $('.tours__running').marquee({
        //duration in milliseconds of the marquee
        duration: 15000,
        //gap in pixels between the tickers
        gap: 200,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true,

        startVisible: 1
    });

    $('.video__running').marquee({
        //duration in milliseconds of the marquee
        duration: 15000,
        //gap in pixels between the tickers
        gap: 200,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true,

        startVisible: 1
    });


    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                // spaceBetween: 20
            },
            // when window width is >= 480px
            // 480: {
            //   slidesPerView: 3,
            //   spaceBetween: 30
            // },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
    // const option = {
    //     //duration in milliseconds of the marquee
    //     duration: 15000,
    //     //gap in pixels between the tickers
    //     gap: 200,
    //     //time in milliseconds before the marquee will start animating
    //     delayBeforeStart: 0,
    //     //'left' or 'right'
    //     direction: 'left',
    //     //true or false - should the marquee be duplicated to show an effect of continues flow
    //     duplicated: true,

    //     startVisible: 1
    // };
    // const options = {
    //     strings: ['и просто <br> хороший <br> человек', 'мадик как <br> в человека паука<br>играется а?=)', 'ВУЛЬВА <br><s>ПИЗДА</s><br><s>ПИСЯ</s>'],
    //     typeSpeed: 100,       // Установите желаемую скорость набора символов
    //     backSpeed: 100,       // Скорость стирания текста
    //     startDelay: 75,     // Задержка перед началом анимации
    //     backDelay: 1000,     // Задержка перед стиранием текста
    //     loop: true,
    //     startDelay: 0,    // Повторять анимацию
    // };
    // const typed = new Typed('#typed-text', options);



})