$(function () {

    let header = $("#header__menu-con");
    let intro = $("#header");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#header__menu");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    /* Фиксированное верхнее меню */
    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Плавный скрол к секции */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });

    /* Показать/скрыть верхнее меню */
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
});