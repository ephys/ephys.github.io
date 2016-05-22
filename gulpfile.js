'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const webpack = require('webpack');

gulp.task('css', function() {
	gulp.src('./_assets/css/main.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(minifyCSS({ processImport: false }))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function(callback) {
  webpack(require('./webpack.config'), function (err, stats) {
    if (err) {
      console.error(err);
    } else {
      console.log('[webpack]', stats.toString());
    }

    callback();
  });
});

gulp.task('default', ['js', 'css'], function() {
	gulp.watch('./_assets/css/**/*', ['css']);
	gulp.watch('./_assets/js/**/*', ['js']);
});
