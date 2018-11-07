'use strict';

var Searchbox = require('../searchbox');

describe('Searchbox View', function() {

  beforeEach(function() {
    this.searchbox = new Searchbox();
  });

  it('Should run a few assertions', function() {
    expect(this.searchbox);
  });

});
