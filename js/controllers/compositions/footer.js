define([
  'chaplin',
  'views/footer-view'
], function(Chaplin, FooterView) {
  'use strict';

  var FooterComposition = Chaplin.Composition.extend({
    compose: function () {
      this.footer = new FooterView();
      this.footer.render();
    }
  });

  return FooterComposition;
});
