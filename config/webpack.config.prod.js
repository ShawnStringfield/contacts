const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const paths = require('./paths');

const env = {
	'process.env.NODE_ENV': JSON.stringify('production'),
	__DEV__: false
};

const config = {
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	entry: [
		paths.appJS
	],
	output: {
		path: paths.appBuild,
		publicPath: '/',
		filename: '[name].[chunkhash].chunk.js'
	},
	plugins: [
		// Hash the files using MD5 so that their names change when the content changes.
		new WebpackMd5Hash(),

		// This helps ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin(),

		// Tells React to build in prod mode.
		new webpack.DefinePlugin(env),

		// Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

		// Minify JS
    new webpack.optimize.UglifyJsPlugin(),

		// Generate an external css file with a hash in the filename
		new ExtractTextPlugin('[name].[contentHash].css'),

		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHTML,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
	],

	module: {
		loaders: [
			// Default loader: load all assets that are not handled
      // by other loaders with the url loader.
      // Note: This list needs to be updated with every change of extensions
      // the other loaders match.
      // E.g., when adding a loader for a new supported file extension,
      // we need to add the supported extension to this loader too.
      // Add one new line in `exclude` for each loader.
      //
      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      // In production, they would get copied to the `build` folder.
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
			{
				exclude: [
					/\.html$/,
					/\.(js|jsx)$/,
					/\.css$/,
					/\.json$/,
					/\.svg$/
				],
				loader: 'url',
				query: {
					limit: 10000,
					name: '[name].[hash].[ext]'
				}
			},
			// Process JS with Babel.
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        loader: 'babel'
      },
			// JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json'
      },
      // "file" loader for svg
      {
        test: /\.svg$/,
        loader: 'file',
        query: {
          name: '[name].[hash].[ext]'
        }
      },
			// The notation here is somewhat confusing.
      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader normally turns CSS into JS modules injecting <style>,
      // but unlike in development configuration, we do something different.
      // `ExtractTextPlugin` first applies the "postcss" and "css" loaders
      // (second argument), then grabs the result CSS and puts it into a
      // separate file in our build process. This way we actually ship
      // a single CSS file in production instead of JS code injecting <style>
      // tags. If you use code splitting, however, any async bundles will still
      // use the "style" loader inside the async code so CSS from them won't be
      // in the main CSS file.
			{
				test: /(\.css|\.scss)$/,
				loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')
			}
		]
	},
	postcss: () => [autoprefixer]
}

module.exports =  config;
