// jQuery Ready

$(function () {
    // Navbar Scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
    // Navbar Scroll

    // Owl Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [2000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    });
    // Owl Carousel
    
});