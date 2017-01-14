import webpack from 'webpack';

export default {
	entry: {
		'dest/vendor': [ 'react', 'react-dom' ],
		'dest/custom': './src'
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.js/, loader: 'babel', exclude: /node_modules/ }
		]
	},
	resolve: {
		extensions: [ '', '.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'dest/vendor',
			chunks: [ 'dest/custom' ],
			// filename: '[name].js'
		})
	]
}