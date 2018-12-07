'use strict';

var Suscribe = require('../suscribe');

describe('Suscribe View', function() {

  beforeEach(function() {
    this.suscribe = new Suscribe();
  });

  it('Should run a few assertions', function() {
    expect(this.suscribe);
  });

});
