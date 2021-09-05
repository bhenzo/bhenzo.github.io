$('#main-slider').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true
});


$(document).ready(function () {
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active')
    });
});

