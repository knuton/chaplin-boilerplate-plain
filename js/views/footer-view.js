define(['views/base/view', 'text!templates/footer.hbs'], function(View, template) {
  'use strict';

  var FooterView = View.extend({
    id: 'footer',
    region: 'footer',
    template: template
  });

  return FooterView;
});
