import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import config from '../config/webpack.config.dev';


import chalk from 'chalk';

browserSync.create();
const compiler = webpack(config);

console.log( chalk.green('Building Production...') );

browserSync({
  port: 2352,
  notify: false,
	proxy: {
		target: 'http://localhost:4000',
		middleware: [
			historyApiFallback(),
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
