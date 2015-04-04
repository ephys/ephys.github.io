'use strict';

var gulp = require('gulp');

var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
gulp.task('browserify', function () {
	try {
		return gulp.src('./assets/javascript/*.js')
			.pipe(browserify())
			.pipe(uglify())
			.pipe(gulp.dest('./_assets/js'));
	} catch(e) {
		console.log(e);
	}
});

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
gulp.task('css', function() {
	try {
		gulp.src('./assets/css/main.scss')
			.pipe(sass())
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(minifyCSS())
			.pipe(gulp.dest('./_assets/css'));
	} catch(e) {
		console.log(e);
	}
});

gulp.task('watch', function() {
	gulp.watch('./assets/css/*.scss', ['css']);
	gulp.watch('./assets/javascript/*.js', ['browserify']);
});