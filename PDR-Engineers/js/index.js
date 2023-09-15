



$('.hero-slider').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                vertical : false,
                // horizontal: true,
            }
        }
    ]
});


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 1000) {
            $(".navbar").addClass("activeVs");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navbar").removeClass("activeVs");
        }
    });
});





