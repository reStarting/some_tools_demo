var SearcList = React.createClass({displayName: "SearcList",
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
	
);