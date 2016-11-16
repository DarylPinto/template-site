const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

	//define entry point
	entry: "./src/index.js",

	//enable sourcemaps
	//devtool: "source-map",

	//define output point
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},

	//loaders
	module: {
		loaders: [

			//javascript
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},

			//sass
			{
				test: /\.(sass|scss)$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			},

			//images
			{
				test: /.*\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[name].[ext]',
					'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
				]
			}


		]
	},

	//plugins
	plugins: [
		new ExtractTextPlugin("style.css")
	]

};