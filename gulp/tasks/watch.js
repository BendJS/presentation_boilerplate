'use strict';

// Necessary Plugins
var gulp  = require('gulp');
var paths = require('../paths');

// Call Watch
module.exports = gulp.task('watch', function() {
  gulp.watch([paths.source.slides, paths.source.templates], ['jade']);
  gulp.watch(paths.source.js, ['js']);
  gulp.watch(paths.source.sass, ['sass']);
  gulp.watch(paths.source.img, ['imagemin']);
});
