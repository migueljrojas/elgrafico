'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderMulti = $('._slidermulti');
    var sliderCover = $('._slidercover');

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
                autoplay: false,
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

            $(this).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                var changingSlide = $(this).slick('getSlick').$slides.get(currentSlide);
                $(changingSlide).find('.embed-responsive-item').attr('src', $('iframe').attr('src'));
            });
        });
    }

    if (sliderCover) {
        sliderCover.each(function(){
            $(this).slick({
                dots: true,
                infinite: true,
                speed: 600,
                slidesToShow:7,
                slidesToScroll: 1,
                centerMode: true,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            centerMode: true,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            centerMode: true,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    }
                ]
            });
        });
    }
};

module.exports = Slider;
