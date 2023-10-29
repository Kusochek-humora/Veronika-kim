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

    $('.merch__running').marquee({
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


    const swiper = new Swiper(".video__swiper", {
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


    const swiper2 = new Swiper(".merch__swiper", {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true
        // },

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
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function checkVisibility() {
        if (isElementInViewport(animatedElement)) {
            // Элемент стал видимым, теперь можно запустить Typed.js анимацию.
            const options = {
                strings: ['coming soon...'],
                typeSpeed: 100,       // Установите желаемую скорость набора символов
                backSpeed: 75,       // Скорость стирания текста
                startDelay: 75,     // Задержка перед началом анимации
              
                loop: true,// Повторять анимацию
                startDelay: 1,
            };
            const typed = new Typed('#coming-soon', options);
            window.removeEventListener("scroll", checkVisibility);
        }
    }

    window.addEventListener("scroll", checkVisibility);

    // Проверьте видимость элемента при загрузке страницы.

    const animatedElement = document.getElementById("merch");


    window.addEventListener("load", function () {
        // Скрыть прелоадер после полной загрузки страницы
        const preloader = document.querySelector(".preloader");
        preloader.addEventListener("animationend", function () {
            preloader.style.display = "none";
        });
        document.body.classList.remove('preloader-active')
    });

})