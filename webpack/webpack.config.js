var webpack = require('webpack');

module.exports = {
	entry: {
		App: [
			'webpack-dev-server/client?http://localhost:8080/assets/',
			'webpack/hot/only-dev-server',
			'./src/app.js'
		]
	},
	output: {
		filename: 'bundle.js', // Will output App_wp_bundle.js
		path: './build', // Save to Rails Asset Pipeline
		publicPath: 'http://localhost:8080/assets' // Required for webpack-dev-server
	},
	plugins: [  
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	module: {
	// Load the react-hot-loader
		loaders: [ { test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader'] } ]
	}
}