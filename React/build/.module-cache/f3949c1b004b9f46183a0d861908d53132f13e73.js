var React = require('react');

var SearcList = React.createClass({displayName: "SearcList",

	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("input", null)
			)
		);
	}

});

module.exports = SearcList;