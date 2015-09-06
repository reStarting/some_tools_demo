var Vue = require('vue');

var demo = new Vue({
	el: "#demo",
	data: {
		title: 'todos',
		todos: [{
			done: true,
			content: 'Learn Javscript'
		},{
			done: false,
			content: 'Learn Vue.js'
		}]
	}
});

Vue.directive('my-directive', {
	bind: function(){
		this.el.style.color = "yellow";
	},
	update: function(newValue, oldValue){
//		console.log(newValue, oldValue, this);
	},
	unbind: function(){
		
	}
})
var demo2 = new Vue({
	el: '#demo2',
	data: {
		msg: 'hello!'
	}
})

Vue.filter('reverse', function(value){
	return value.split('').reverse().join('');
});

var demo3 = new Vue({
	el:'#demo3',
	data:{
		message:'abcde'
	}
});

Vue.filter('checkCount',  {
	read: function(value){
		console.log('read', value)
		return value;
	},
	write: function(value, oldValue){
		console.log('write', value, oldValue);
		return value.length < 3 ? oldValue : value;
	}
})
var demo4 = new Vue({
	el: '#demo4',
	data:{
		message: 'ID-'
	}
});

Vue.component('mycmp',{
//	replace:true,
	props: ['myMsg'],
	template: '<div>MyCmp register--{{myMsg}}</div>'
});

var demo5 = new Vue({
	el:'#demo5'
})


Vue.component('parent',{
	methods:{
		onChildLoaded:function(msg){
			console.log(msg)
		}
	},
	template:'<child on-load={{onChildLoaded}}></child>'
});
Vue.component('child',{
	props:['onLoad'],
	ready: function(){
		this.onLoad('Child is Loaded!');
	}
});
new Vue({
	el: '#demo6'
})






