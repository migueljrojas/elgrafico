// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var Modal = require('../_modules/modal/modal');
var Multirange = require('../_modules/multirange/multirange');
var BuscadorTapas = require('../_modules/multirange/buscador-tapas');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');
    require('../../bower_components/slick-carousel/slick/slick');

    new Header();
    new Slider();
    new Modal();
    new Multirange();
    new BuscadorTapas();
});
