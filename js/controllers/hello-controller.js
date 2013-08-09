define([
  'controllers/base/controller',
  'controllers/compositions/header',
  'controllers/compositions/footer',
  'models/hello-world',
  'views/hello-world-view'
], function(Controller, HeaderComposition, FooterComposition, HelloWorld, HelloWorldView) {
  'use strict';

  var HelloWorldController = Controller.extend({
    show: function(params) {
      this.compose('header', HeaderComposition);
      this.compose('footer', FooterComposition);
      this.model = new HelloWorld();
      this.view = new HelloWorldView({
        model: this.model,
        region: 'main'
      });
    }
  });

  return HelloWorldController;
});
