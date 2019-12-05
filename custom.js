$(document).ready(function(){
    $('.js-case-studies-carousel').slick({
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.js-skeptics-speak-image-carousel').slick({
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});



                        