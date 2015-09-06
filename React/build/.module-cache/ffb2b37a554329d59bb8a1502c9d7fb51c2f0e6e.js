var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ImageCarousel = React.createClass({displayName: "ImageCarousel",
	getInitialState: function() {
		return {
			items: ['http://a.hiphotos.baidu.com/image/pic/item/7af40ad162d9f2d3e78a65eeabec8a136327cc1c.jpg','http://b.hiphotos.baidu.com/image/pic/item/472309f790529822935f57c3d5ca7bcb0a46d446.jpg','http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9ea189471f4d639b6003af3b345.jpg','http://f.hiphotos.baidu.com/image/pic/item/09fa513d269759ee307771c3b0fb43166d22df96.jpg']
		};
	},
	handleClick: function(i){
		var items = this.state.items;
		var item = items.splice(i, 1);
		item[0] += "?t="+new Date();
		var newItems = items.concat(item);
		this.setState({items:newItems});
	},
	render: function() {
		var items = this.state.items.map(function(item, i){
			return React.createElement("img", {onClick: this.handleClick.bind(this, i), className: "pic", width: "400", height: "300", src: item, key: item});
		}.bind(this));
		return (
			React.createElement("div", null, 
				React.createElement(ReactCSSTransitionGroup, {transitionAppear: true, transitionName: "carousel", className: "slider"}, 
					items
				)	
			)
		);
	}
});


React.render(
	React.createElement(ImageCarousel, null),
	document.getElementById('app')
);


