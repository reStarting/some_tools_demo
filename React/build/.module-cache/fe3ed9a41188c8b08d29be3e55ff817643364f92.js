var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageCarousel = React.createClass({displayName: "ImageCarousel",
	getInitialState: function() {
		return {
			items: ['http://a.hiphotos.baidu.com/image/pic/item/7af40ad162d9f2d3e78a65eeabec8a136327cc1c.jpg','http://b.hiphotos.baidu.com/image/pic/item/472309f790529822935f57c3d5ca7bcb0a46d446.jpg','']
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

