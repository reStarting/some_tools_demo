var React = require('react');

var SearcList = React.createClass({displayName: "SearcList",

	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", value: this.state.searchStr})
			)
		);
	}

});

module.exports = SearcList;