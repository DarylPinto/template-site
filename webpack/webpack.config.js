module.exports = {

	//define entry point
	entry: "./src/index.js",

	//enable sourcemaps
	devtool: "source-map",

	//define output point
	output: {
		path: 'dist',
		filename: 'bundle.js'
	},

	//loaders
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(sass|scss)$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			}
		]
	}

};