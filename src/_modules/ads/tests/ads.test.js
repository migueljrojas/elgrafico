'use strict';

var Ads = require('../ads');

describe('Ads View', function() {

  beforeEach(function() {
    this.ads = new Ads();
  });

  it('Should run a few assertions', function() {
    expect(this.ads);
  });

});
