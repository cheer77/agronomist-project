$(function () {

    $('.header__menu-mob').on('click', function (event) {
        $('.header__menu-mob').toggleClass('header__menu-mob-active');
        $('.header__menu').toggleClass('header__menu-active');
        $('body').toggleClass('lock');
    });

    $(".header__menu a, .go-top").on("click", function (e) {
        //отменяем стандартную обработку нажатия по ссылке
        e.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 2500);
    });


    $('.goods__tab-item').on('click', function (e) {

        e.preventDefault();
        $('.goods__tab-item').removeClass('goods__tab-item--active');
        $(this).addClass('goods__tab-item--active');

        $('.goods__tab-content-item').removeClass('goods__tab-content-item--active');
        $($(this).attr('href')).addClass('goods__tab-content-item--active');

    });


    $('.goods__tab-item-sec').on('click', function (e) {

        e.preventDefault();
        $('.goods__tab-item-sec').removeClass('goods__tab-item-sec--active');
        $(this).addClass('goods__tab-item-sec--active');

        $('.goods__tab-content-item-sec').removeClass('goods__tab-content-item-sec--active');
        $($(this).attr('href')).addClass('goods__tab-content-item-sec--active');

    });

    $('.goods__tab-item-3').on('click', function (e) {

        e.preventDefault();
        $('.goods__tab-item-3').removeClass('goods__tab-item-3--active');
        $(this).addClass('goods__tab-item-3--active');

        $('.goods__tab-content-item-3').removeClass('goods__tab-content-item-3--active');
        $($(this).attr('href')).addClass('goods__tab-content-item-3--active');

    });

    $('.goods__tab-item-4').on('click', function (e) {

        e.preventDefault();
        $('.goods__tab-item-4').removeClass('goods__tab-item-4--active');
        $(this).addClass('goods__tab-item-4--active');

        $('.goods__tab-content-item-4').removeClass('goods__tab-content-item-4--active');
        $($(this).attr('href')).addClass('goods__tab-content-item-4--active');

    });
    $('.goods__tab-item-5').on('click', function (e) {

        e.preventDefault();
        $('.goods__tab-item-5').removeClass('goods__tab-item-5--active');
        $(this).addClass('goods__tab-item-5--active');

        $('.goods__tab-content-item-5').removeClass('goods__tab-content-item-5--active');
        $($(this).attr('href')).addClass('goods__tab-content-item-5--active');

    });


    const swiper = new Swiper('.slider__top-container', {

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });


    const MySwiper = new Swiper('.slider__bottom-container', {
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });








    $(function () {
        $('.minimized').click(function (event) {
            var i_path = $(this).attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
            $('#magnify').css({
                left: ($(document).width() - $('#magnify').outerWidth()) / 2,
                // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
                top: ($(window).height() - $('#magnify').outerHeight()) / 2
            });
            $('#overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, #overlay', function (event) {
            event.preventDefault();

            $('#overlay, #magnify').fadeOut('fast', function () {
                $('#close-popup, #magnify, #overlay').remove();
            });
        });
    });







});