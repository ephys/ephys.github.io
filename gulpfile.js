'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const postcssEnv = require('postcss-preset-env');
const flexbugs = require('postcss-flexbugs-fixes');
const scssSyntax = require('postcss-scss');

// const cssnano = require('cssnano');

gulp.task('default', () => {
  return gulp.src('./assets/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      flexbugs(),
      postcssEnv(),
    ], { syntax: scssSyntax }))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', ['default'], () => {
  return gulp.watch('./assets/scss/**/*.scss', ['default']);
});
