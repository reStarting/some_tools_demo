var LinkedStateMixin = React.addons.LinkedStateMixin;
console.log(LinkedStateMixin)

var ReactLink = React.createClass({displayName: "ReactLink",
  mixins:[LinkedStateMixin],
  getInitialState: function() {
    return {
      message: 'hello'
    };
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", valueLink: this.linkState('message')}), 
        React.createElement("div", null, this.state.message)
      )
    );
  }
});

React.render(
    React.createElement(ReactLink, null),
    document.getElementById('app')
);