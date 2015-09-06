module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders:[{
			test: /\.hbs$/,
			loader: 'handlebars'
		},{
			test: /\.js$/,
			loader: 'babel'
		}]
	}
}