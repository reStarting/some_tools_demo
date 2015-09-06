module.exports = {
	entry:'./app.js',
	output: {
		filename:'bundle.js'
	},
	module: {
		loaders:[{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		},{
			test: /\.css$/,
			loader:'style-loader!css-loader'
		}]
	}
};