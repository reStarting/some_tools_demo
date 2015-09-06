var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
				"Hello, ReactJS! I am a CommentList.", 
				React.createElement("h6", null, "author:", this.props.author)
			)
		);
	}
});


var CommentForm = React.createClass({displayName: "CommentForm",

	render: function() {
		return (
			React.createElement("div", {className: "commentForm"}, 
				"Hello, ReactJS! I am a CommentForm."
			)
		);
	}

});

var CommentBox = React.createClass({displayName: "CommentBox",
	getInitialState: function() {
	  return {
	    inputValue: 'hello',
	  };
	},
	handlerChange: function(){
		this.setState({
			inputValue:this.refs.ipt.getDOMNode().value
		});
	},
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comment"), 
				React.createElement("input", {ref: "ipt", type: "text", onChange: this.handlerChange, value: this.state.inputValue}), 
				React.createElement("div", null, this.state.inputValue), 
				React.createElement(CommentList, {author: "author1"}), 
				React.createElement("commentForm", null)
			)
		);
	}
});

React.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
);