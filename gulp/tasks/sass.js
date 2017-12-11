'use strict';

// Necessary Plugins
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var sass         = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var csscomb      = require('gulp-csscomb');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var paths = require('../paths');

// Call Stylus
module.exports = gulp.task('sass', function () {
  return gulp.src(paths.source.files.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(csscomb())
    .pipe(gulp.dest(paths.build.css));
});