const webpack = require('webpack');
const fs = require('fs-extra');
const chalk = require('chalk');
const config = require('../config/webpack.config.prod.js');
const paths = require('../config/paths');

// Ensure any code reading this knows the correct environment
// Also tells React to build in prod mode
// It is absolutely essential that NODE_ENV is set to production.
// Otherwise React will be compiled in the very slow development mode.
process.env.NODE_ENV = 'production';
// Load environment variables from .env file.
require('dotenv').config({silent: true});


// Ensures that a directory is empty. Deletes directory contents if the directory is not empty. If the directory does not exist, it is created. The directory itself is not deleted.
fs.emptyDirSync(paths.appBuild);

webpack(config).run((error, stats) => {
	if (error) {
		console.log( error );
		return 1;
	}

	console.log( chalk.green(stats) );;
	return 0;
});
