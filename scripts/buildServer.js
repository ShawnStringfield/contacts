import browserSync from 'browser-sync';
import chalk from 'chalk';

console.log( chalk.green('Building Production...') );

browserSync({
  port: 2352,
  notify: false,
  server: {
    baseDir: 'build'
  }
});
