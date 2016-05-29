'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const webpack = require('webpack');

gulp.task('css', function () {
  gulp.src('./_assets/css/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: [
        'Android >= 2.3',
        'BlackBerry >= 7',
        'Chrome >= 9',
        'Firefox >= 4',
        'Explorer >= 9',
        'iOS >= 5',
        'Opera >= 11',
        'Safari >= 5',
        'OperaMobile >= 11',
        'OperaMini >= 6',
        'ChromeAndroid >= 9',
        'FirefoxAndroid >= 4',
        'ExplorerMobile >= 9'
      ],
      cascade: false
    }))
    .pipe(minifyCSS({ processImport: false }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function (callback) {
  webpack(require('./webpack.config'), function (err, stats) {
    if (err) {
      console.error(err);
    } else {
      console.log('[webpack]', stats.toString());
    }

    callback();
  });
});

gulp.task('default', ['js', 'css'], function () {
  gulp.watch('./_assets/css/**/*', ['css']);
  gulp.watch('./_assets/js/**/*', ['js']);
});
