var React = require('react');

class Hello extends React.Component{
	render(){
		return <h1>Hello React!</h1>
	}
}


React.render(<Hello />, document.body);
