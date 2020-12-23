$(function () {

    let header = $(".fixed__menu");
    let intro = $("#header");
    let introH = intro.innerHeight().toFixed();
    let scrollPos = $(window).scrollTop();
    let nav = $("#header__menu");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    /* Фиксированное верхнее меню */
    $(window).on("scroll resize", function () {
        introH = intro.innerHeight().toFixed();
        scrollPos = $(this).scrollTop().toFixed();

        nav.removeClass("show");

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH - 62) {
            console.log('Fixed add');
            header.addClass("fixed");
        } else {
            console.log('Fixed remove');
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

    /* Бургер: показать/скрыть верхнее меню */
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* Клик в любое место: скрыть верхнее меню */
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var menu = $("#header__menu"); // тут указываем ID элемента
        var burger = $("#navToggle");
        if (!menu.is(e.target), !burger.is(e.target) // если клик был не по нашему блоку
            && menu.has(e.target).length, burger.has(e.target).length === 0) { // и не по его дочерним элементам
            nav.removeClass("show");// скрываем его
        }
    });

    /* Слайдер: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true,
        autoplay: true
    });
});