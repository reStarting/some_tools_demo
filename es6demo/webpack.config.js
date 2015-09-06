module.exports = {
	entry:'./app.js',
	output:{
		filename:'./bundle.js'
	},
	module:{
		loaders:[{
			test: /\.js/,
			loader:'babel-loader'
		}]
	}
}