'use strict';

// Necessary Plugins
var gulp = require('gulp');

// Default task
module.exports = gulp.task('build', ['js', 'jade', 'sass', 'imagemin']);
