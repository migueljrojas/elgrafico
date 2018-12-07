'use strict';

var Sidebar = require('../sidebar');

describe('Sidebar View', function() {

  beforeEach(function() {
    this.sidebar = new Sidebar();
  });

  it('Should run a few assertions', function() {
    expect(this.sidebar);
  });

});
