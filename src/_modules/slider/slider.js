'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderMulti = $('._slidermulti');
    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: true,
                fade: true,
                arrows:  true,
                autoplay: true
            });
        });
    }
    if (sliderMulti) {
        sliderMulti.each(function(){
            $(this).slick({
                dots: true,
                infinite: true,
                speed: 600,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }
};

module.exports = Slider;
