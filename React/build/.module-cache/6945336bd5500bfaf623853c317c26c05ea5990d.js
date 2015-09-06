var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageCarousel = React.createClass({displayName: "ImageCarousel",
	// propTypes:{
	// 	imageSrc = React.PropTypes.string.isRequired
	// },
	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(ReactCSSTransitionGroup, {transitionName: "carousel"}, 
					React.createElement("div", null, "1111111111111"), 
					React.createElement("div", null, "2222222222222"), 
					"// ", React.createElement("img", {"data-width": "400", src: this.props.imageSrc, key: this.props.imageSrc})
				)	
			)
		);
	}
});



React.render(
	React.createElement(ImageCarousel, {imageSrc: "http://a.hiphotos.baidu.com/image/pic/item/7af40ad162d9f2d3e78a65eeabec8a136327cc1c.jpg"}),
	document.getElementById('app')
);


