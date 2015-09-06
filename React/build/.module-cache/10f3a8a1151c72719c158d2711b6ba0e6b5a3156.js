var IntervalMixin = {
	componentWillMount: function() {
		this.intervals = [];
	},
	setInterval: function(){
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount: function() {
	 	this.intervals.map(clearInterval);
	}
};


var Show = React.createClass({displayName: "Show",

	componentWillReceiveProps: function(nextProps) {
		console.log(this.props, nextProps);
	},

	render: function() {
		return (
			React.createElement("div", null, 
				"ReactJS 已运行", this.props.second, "秒!"
			)
		);
	}

});

var Runner = React.createClass({displayName: "Runner",
	mixins:[IntervalMixin],
	getInitialState: function() {
		return {
			second: 0
		};
	},
	componentDidMount: function() {
		this.setInterval(this.tick, 1000);
	},
	tick: function(){
		this.setState({second:this.state.second+1});
	},
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement("p", null, this.props.name), 
				React.createElement(Show, {second: this.state.second})
			)
		);
	}
});

React.render(React.createElement(Runner, {name: "test"}), document.getElementById('app'));

