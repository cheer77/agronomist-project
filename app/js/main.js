$(function () {

    $('.header__menu-mob').on('click', function (event) {
        $('.header__menu-mob').toggleClass('header__menu-mob-active');
        $('.header__menu').toggleClass('header__menu-active');
        $('body').toggleClass('lock');
    });


    $('.goods__tab-item').on('click', function (e) {

        e.preventDefault();
        $('.goods__tab-item').removeClass('goods__tab-item--active');
        $(this).addClass('goods__tab-item--active');

        $('.goods__tab-content-item').removeClass('goods__tab-content-item--active');
        $($(this).attr('href')).addClass('goods__tab-content-item--active');

    });


    var swiper = new Swiper('.goods__slider-top', {
        // Optional parameters


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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