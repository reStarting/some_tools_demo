var WithoutMixin = React.createClass({displayName: "WithoutMixin",
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  handleChange: function(newValue) {
    this.setState({message: newValue});
    console.log(this.refs.ipt.props.valueLink);
  },
  render: function() {
    var valueLink = {
      value: this.state.message,
      requestChange: this.handleChange
    };
    return React.createElement("input", {ref: "ipt", type: "text", onChange: this.handl});
  }
});

React.render(
    React.createElement(WithoutMixin, null),
    document.getElementById('app')
);