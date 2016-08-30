/* Смена цвета ссылки при наведении на логотип */

jQuery(document).ready(function ($) {
    $('#logo-img').mouseover(function () {
        $('.h-logo-txt').addClass('hover');   
    });
    $('#logo-img').mouseout(function () {
        $('.h-logo-txt').removeClass('hover');   
    });
});

/* --Слайдер-- */

/* Смена вида изображения логотипов при наведении курсора*/

jQuery(document).ready(function ($) {
    $('.slider-top li a').mouseover(function () {
        $(this).addClass('hover');   
    });
    $('.slider-top li a').mouseout(function () {
        $(this).removeClass('hover');   
    });
});
