'use strict';

var VideoSlider = require('../video-slider');

describe('VideoSlider View', function() {

  beforeEach(function() {
    this.videoSlider = new VideoSlider();
  });

  it('Should run a few assertions', function() {
    expect(this.videoSlider);
  });

});
