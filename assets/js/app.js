

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
        let lastScrollTop = 0;
        $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                // Scrolling down
                $('.header').removeClass('up').addClass('down');
                $('.wrap_cart').addClass('scroll');
            } else {
                // Scrolling up
                $('.header').removeClass('down').addClass('up');
                $('.wrap_cart').removeClass('scroll');
            }
            lastScrollTop = scrollTop;
        });

        $('.menu .nav-link.dropdown-toggle').click(function(event) {
            let $this = $(this);
            let $dropdownMenu = $this.next('.dropdown-menu');
            if ($dropdownMenu.hasClass('show')) {
                window.location.href = $this.attr('href');
            } else {
                event.preventDefault();
                $('.dropdown-menu').removeClass('show');
                $dropdownMenu.addClass('show');
            }
        });
        $(document).click(function(event) {
            if (!$(event.target).closest('.menu .nav-item.dropdown').length) {
                $('.menu .dropdown-menu').removeClass('show');
            }
        });
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

    // Kiểm tra nếu kích thước màn hình từ 991px trở xuống
    function isMobile() {
        return window.matchMedia('(max-width: 991px)').matches;
    }

    $(document).on('click', '.btn_cart', function(){
        $(this).toggleClass('open');
        $('.wrap_cart').toggleClass('active');

        if (isMobile()) {
            $('html').css('overflow', 'hidden');
        }
    });

    $(document).on('click', '.btn-close-cart', function(){
        $('.btn_cart').removeClass('open');
        $('.wrap_cart').removeClass('active');

        if (isMobile()) {
            $('html').css('overflow', 'auto');
        }
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
