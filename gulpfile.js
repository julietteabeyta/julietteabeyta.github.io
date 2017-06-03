'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('sass', function() {
	return gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: '.'
		}
	});
	gulp.watch('*.html').on('change', reload);
})
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('./scss/*.scss', ['sass']);
});
