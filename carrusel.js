$(function () { 
    $('.slick_proyectos').slick({
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        responsive:[
            {
                breakpoint: 1050,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 850,
                settings:{
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow:2
                }
            }
        ]
    });
})
