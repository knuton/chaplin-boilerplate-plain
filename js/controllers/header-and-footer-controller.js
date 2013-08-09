define([
  'controllers/header-controller',
  'views/footer-view'
], function(HeaderController, FooterView) {
  'use strict';

  var HeaderAndFooterController = HeaderController.extend({
    beforeAction: function (params, route) {
      HeaderController.prototype.beforeAction(params, route);
      this.compose('footer', FooterView);
    }
  });

  return HeaderAndFooterController;
});
