// var Vue = require('vue');


Vue.component('tern-cmp',{
  data: function () {
    return {
      msg: 'hello'
    }
  },
  template: '<div>{{msg}}</div>'
});

new Vue({
  el: '#tern',
  template: '<tern-cmp></tern-cmp>'
});
