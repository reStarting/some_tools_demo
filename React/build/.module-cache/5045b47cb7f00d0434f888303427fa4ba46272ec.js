var SearchList = React.createClass({displayName: "SearchList",
	getInitialState: function() {
		return {
			searchStr: ''
		};
	},
	handleSearch: function(e){
		this.setState({
			searchStr:e.target.value
		});
		var items = this.props.items;
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", value: this.state.searchStr, onChange: this.handleSearch})
			)
		);
	}

});

React.render(
	React.createElement(SearchList, null),
	document.getElementById('app')
);