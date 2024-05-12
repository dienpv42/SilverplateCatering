

(function ($) {
    "use strict";

    $( ".banner" ).each(function() {
        var attr = $(this).attr('data-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background-image", "url("+attr+")");
        }
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).data("bg-color"));
    });


    $(document).ready(function() {
        var slide = new Swiper(".slide_swiper", {
            slidesPerView: 3,
            speed: 1000,
            loop: false,
            spaceBetween: 15,
            slidesPerGroup: 3,
            autoplay: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                1400: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },

                992: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },

                768: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },

                576: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },

                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });
    });



    $(document).on('click', '.toggle-menu-link', function(){
        $(this).toggleClass('open');
        $('.wrap_menu_mb').toggleClass('active');
        $('.bg_backgdrop').toggleClass('active');
    });

    $(document).on('click', '.bg_backgdrop', function (){
        $(this).toggleClass('active');
        $('.toggle-menu-link').toggleClass('open');
        $('.wrap_menu_mb').toggleClass('active');
    });

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > 2) {
            $(".header_top").addClass("active");
        } else {
            $(".header_top").removeClass("active");
        }
    });
    $(window).on("load", function () {
        AOS.init({
            easing: "ease", // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
        });
    });

})(window.jQuery);
