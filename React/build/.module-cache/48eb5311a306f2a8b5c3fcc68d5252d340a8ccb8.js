var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({displayName: "TodoList",
	getInitialState: function() {
		return {
			items: ['hello','react','click','me']
		};
	},
	handleAdd: function(){
		var newItems = this.state.items.concat([prompt()]);
	}
})