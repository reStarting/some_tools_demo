var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageCarousel = React.createClass({displayName: "ImageCarousel",
	getInitialState: function() {
		return {
			items: ['']
		};
	},
	handleClick: function(){
		console.log(this.refs.img)
	},
	render: function() {
		var items = this.props.items;
		items.map(function(item, i){
			console.log(item)
			return item;
		});
		return (
			React.createElement("div", null, 
				React.createElement(ReactCSSTransitionGroup, {transitionName: "carousel"}, 
					React.createElement("img", {ref: "img", width: "400", onClick: this.handleClick, src: this.props.imageSrc, key: this.props.imageSrc})
				)	
			)
		);
	}
});



React.render(
	React.createElement(ImageCarousel, {imageSrc: ""}),
	document.getElementById('app')
);


