var React = require('react');

var SearcList = React.createClass({displayName: "SearcList",

	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text"})
			)
		);
	}

});

module.exports = SearcList;