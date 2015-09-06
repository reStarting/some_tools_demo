var SearchList = React.createClass({displayName: "SearchList",
	getInitialState: function() {
		return {
			searchStr: ''
		};
	},
	handleSearch: function(e){
		var str = e.target.value;
		this.setState({
			searchStr:str
		});
	},
	render: function() {
		var items = this.props.items;

		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", value: this.state.searchStr, onChange: this.handleSearch}), 
				items
			)
		);
	}

});

React.render(
	React.createElement(SearchList, {items: ['hello','test','react','js']}),
	document.getElementById('app')
);