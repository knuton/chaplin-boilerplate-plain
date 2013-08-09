define([
  'controllers/base/controller',
  'views/header-view'
], function(Controller, HeaderView) {
  'use strict';

  var HeaderController = Controller.extend({
    beforeAction: function (params, route) {
      Controller.prototype.beforeAction(params, route);
      this.compose('header', HeaderView);
    }
  });

  return HeaderController;
});
