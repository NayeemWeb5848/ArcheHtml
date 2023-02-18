$(function () {
    'use strict';



    $('.venobox').venobox()



// testimonial_slider
    $('.testimonial_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      });


// service slider start
    $('.service_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      });
      



    $('.big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.small',
        speed: 2000,
        
    });
    $('.small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.big-slider',
        arrows: false,
        dots: false,
        // centerMode: true,
        // centerpadding: 0,
        focusOnSelect: true,
    });

    // counter Up start

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
   


});