var Vue = require('vue');

var list =require('./components/list.vue');


console.log(list)

new Vue({
	el: '#app',
	data: {
		currentView: 'list'
	},
	template: '<div v-component="{{currentView}}"></div>',
	components: {
		list: list
	}
});
