define([
  'chaplin',
  'views/header-view'
], function(Chaplin, HeaderView) {
  'use strict';

  var HeaderComposition = Chaplin.Composition.extend({
    compose: function () {
      this.header = new HeaderView();
      this.header.render();
    }
  });

  return HeaderComposition;
});
