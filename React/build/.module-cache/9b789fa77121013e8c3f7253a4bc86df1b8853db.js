var WithoutMixin = React.createClass({displayName: "WithoutMixin",
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  handleChange: function(newValue) {
    this.setState({message: newValue});
    console.log(this.refs.ipt)
  },
  render: function() {
    var valueLink = {
      value: this.state.message,
      requestChange: this.handleChange
    };
    return React.createElement("input", {ref: "ipt", onChange: this.handleChange, type: "text"});
  }
});

React.render(
    React.createElement(WithoutMixin, null),
    document.getElementById('app')
);