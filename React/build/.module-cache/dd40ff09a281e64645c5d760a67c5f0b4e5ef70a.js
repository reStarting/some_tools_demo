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
		var str = this.state.searchStr;
		var items = this.props.items;
		var its = items.filter(function(item){
			return item.indexOf(str)>=0;
		});
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", value: this.state.searchStr, onChange: this.handleSearch}), 
				its.map(function(item){

				})
			)
		);
	}

});

React.render(
	React.createElement(SearchList, {items: ['hello','test','react','js']}),
	document.getElementById('app')
);