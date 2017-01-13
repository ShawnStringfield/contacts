require('dotenv').config({silent: true});

import browserSync from 'browser-sync';
import webpack from 'webpack';
import historyApiFallback from 'connect-history-api-fallback';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../config/webpack.config.dev';

browserSync.create();

const compiler = webpack(config);

const runServer = () => {
	browserSync({

		port: 7000,
		open: false,
		notify: false,

		proxy: {
			target: 'http://localhost:4000',
			middleware: [
				historyApiFallback(),
				webpackHotMiddleware(compiler),
				webpackDevMiddleware(compiler, {
					publicPath: config.output.publicPath,
					noInfo: false,
					quiet: false,
	        stats: {
	          assets: false,
	          colors: true,
	          version: false,
	          hash: false,
	          timings: false,
	          chunks: false,
	          chunkModules: false
	        },
				})
			]
		},

		files: [
			'client/**/*.html'
		]
	});
}

export default runServer;
