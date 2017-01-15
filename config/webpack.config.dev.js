import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from 'path';
import paths from './paths';

const env = {
	'process.env.NODE_ENV': JSON.stringify('development'),
	__DEV__: true
};

const config = {

	debug: true,
	devtool: 'cheap-module-source-map',

	entry: [
		'webpack-hot-middleware/client?reload=true',
		paths.appJS
	],

	output: {
		path: paths.appBuild,
		publicPath: '/',
		filename: 'bundle.js'
	},

	plugins: [
		new webpack.DefinePlugin(env),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
      template: paths.appHTML,
			minify: {
        removeComments: true,
        collapseWhitespace: true
      }
		})
	],

	module: {
		// First, run the linter.
    // It's important to do this before Babel processes the JS.
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.appSrc,
      }
    ],

		loaders: [
			// "file" loaders for svg and images
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'file?name=[name].[ext]'
			},
			{
				test: /\.svg$/,
				loader: 'file',
				query: {
					name: '[name].[hash].[ext]'
				}
			},
			// Process JS with Babel.
			{
				test: /\.(js|jsx)$/,
				// Whitelist over Blacklist
				include: paths.appSrc,
				loader: 'babel',
				query: {
					// This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true
				}
			},
			// JSON is not enabled by default in Webpack but both Node and Browserify
			// allow it implicitly so we also enable it.
			{
				test: /\.json$/,
				loader: 'json'
			},
			// Process css with Sass
			{
				test: /(\.css|\.scss)$/,
				loaders: [
					'style',
					'css?sourceMap',
					'postcss',
					'sass?sourceMap'
				]
			}
		]
	},
	postcss: () => [autoprefixer]
}

export default config;
