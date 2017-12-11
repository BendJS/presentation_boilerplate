'use strict';

// Necessary Plugins
var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['js', 'jade', 'sass', 'imagemin',
  'watch', 'browser-sync']);
