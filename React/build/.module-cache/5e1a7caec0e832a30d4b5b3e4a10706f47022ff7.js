var SearchList = React.createClass({displayName: "SearchList",
	handleSearch: function(){

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