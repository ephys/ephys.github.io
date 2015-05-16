'use strict';

var gulp = require('gulp');

var tsify = require('tsify');
var Browserify = require('browserify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
gulp.task('browserify', function () {
	return Browserify({ debug: true })
		.add('./assets/typescript/main.ts')
		.plugin(tsify, { noImplicitAny: true, removeComments: true })
		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./assets_/js/'));
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
			.pipe(gulp.dest('./assets_/css'));
	} catch(e) {
		console.log(e);
	}
});

gulp.task('watch', function() {
	gulp.watch('./assets/css/*.scss', ['css']);
	gulp.watch('./assets/typescript/*.ts', ['browserify']);
});