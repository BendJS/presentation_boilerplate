'use strict';

module.exports = {
  source: {
    templates: './src/templates/**/*.jade',
    slides: './src/slides/*.md',
    presentation: './src/presentation.md',
    js: './src/js/**/*.js',
    sass: './src/sass/**/*.scss',
    img: './src/img/**/*',
    files: {
      jade: './src/templates/index.jade',
      sass: './src/sass/main.scss'
    }
  },

  browserSync: {
    html: './build/**/*.html',
    css: './build/css/**/*.css',
    js: './build/js/**/*.js',
    img: './build/img/**/*'
  },

  build: {
    html: './build/',
    css: './build/css',
    js: './build/js',
    img: './build/img',
  },

  deploy: {
    pages: './build/**/*'
  }
};
