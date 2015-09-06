var vue = require('vue-loader');

module.exports = {
	entry: './app.js',
	output: {
		filename: './bundle.js'
	},
	module:{
		loaders:[{
			test: /\.js/,
			loader: 'babel'
		},{
			test: /\.vue$/,
			loader: vue.withLoaders({
				js: 'babel?optional[]=runtime'
			})
		}]
	}
}
