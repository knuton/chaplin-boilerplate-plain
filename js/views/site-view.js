define(['views/base/view', 'text!templates/site.hbs'], function(View, template) {
  'use strict';

  var SiteView = View.extend({
    container: 'body',
    id: 'site-container',
    regions: {
      main: '#main-container',
      header: '#header',
      footer: '#footer'
    },
    template: template
  });

  return SiteView;
});
