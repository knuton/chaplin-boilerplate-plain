define([
  'controllers/header-and-footer-controller',
  'models/hello-world',
  'views/hello-world-view'
], function(HeaderAndFooterController, HelloWorld, HelloWorldView) {
  'use strict';

  var HelloWorldController = HeaderAndFooterController.extend({
    show: function(params) {
      this.model = new HelloWorld();
      this.view = new HelloWorldView({
        model: this.model,
        region: 'main'
      });
    }
  });

  return HelloWorldController;
});
