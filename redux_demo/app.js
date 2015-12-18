var Redux = require('redux');

var reducers = require('./reducers')
var actions = require('./actions/list')

var store = Redux.createStore(reducers)

var dispatch = store.dispatch;
var getState = store.getState;
var subscribe = store.subscribe;

var unsubscribe = subscribe(function(){
	var state = getState();
	var lis = ""
	for(var i=0,len=state.list.length; i<len; i++)
	{
		lis += "<li>" + state.list[i].text + "</li>"
	}
	document.getElementById("list").innerHTML = "<ul>" + lis + "</ul>"
})

document.getElementById("btn").onclick = function() {
	dispatch(actions.queryList());
}




