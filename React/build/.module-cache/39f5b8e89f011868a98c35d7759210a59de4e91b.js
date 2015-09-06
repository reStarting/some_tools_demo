var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageCarousel = React.createClass({displayName: "ImageCarousel",
	getInitialState: function() {
		return {
			items: ['http://a.hiphotos.baidu.com/image/pic/item/7af40ad162d9f2d3e78a65eeabec8a136327cc1c.jpg','http://b.hiphotos.baidu.com/image/pic/item/472309f790529822935f57c3d5ca7bcb0a46d446.jpg','http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9ea189471f4d639b6003af3b345.jpg','http://f.hiphotos.baidu.com/image/pic/item/09fa513d269759ee307771c3b0fb43166d22df96.jpg']
		};
	},
	handleClick: function(){
		console.log(this.refs.img)
	},
	render: function() {
		var items = this.props.items.map(function(item, i){
			return React.createElement("img", {width: "400", src: item, key: item});
		});
		return (
			React.createElement("div", null, 
				React.createElement(ReactCSSTransitionGroup, {transitionName: "carousel"}, 
					newItems
				)	
			)
		);
	}
});



React.render(
	React.createElement(ImageCarousel, {imageSrc: ""}),
	document.getElementById('app')
);


