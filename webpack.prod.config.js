var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: ./build,
    publicPath: 'http://www.keithwade.com/pokedata/',
    filename: 'bundle.js'
  },
  module: {
		loaders: [
			{ test: /(\.jsx|\.js)$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015', 'stage-1'] } },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
	    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
		]
  },
  progress: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true
			}
		})
	]
};
