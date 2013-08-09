define(['views/base/view', 'text!templates/header.hbs'], function(View, template) {
  'use strict';

  var HeaderView = View.extend({
    id: 'header',
    region: 'header',
    template: template
  });

  return HeaderView;
});
