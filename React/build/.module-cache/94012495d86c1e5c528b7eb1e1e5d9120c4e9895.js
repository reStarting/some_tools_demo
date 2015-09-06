var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({displayName: "TodoList",
	getInitialState: function() {
		return {
			items: ['hello','react','click','me']
		};
	},
	handleAdd: function(){
		var newItems = this.state.items.concat([prompt('Enter some text')]);
		this.setState({items:newItems});
	},
	handleRemove: function(i){
		var newItems = this.state.items;
		newItems.splice(i,1);
		this.setState({items:newItems});
	},
	render: function(){
		var items = this.state.items.map(function(item, i){

		});
	}
})