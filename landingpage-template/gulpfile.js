const gulp = require('gulp');
const babel = require('gulp-babel');
const cache = require('gulp-cached');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const sass = require('gulp-sass');
const sourcemap = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

//Sass
gulp.task('sass', () => {
	gulp.src('public/resources/sass/*.sass')
		.pipe(sourcemap.init())
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('public/resources/css/'))
});

//Javascript
gulp.task('js', () => {
	gulp.src('public/resources/js/*.js')
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('public/resources/js/packed/'))
		.pipe(sourcemap.init())
			.pipe(babel())
			.pipe(uglify())
		.pipe(sourcemap.write())
		.pipe(gulp.dest('public/resources/js/min/'))
});

//Image Optimization
gulp.task('images', () => {
	gulp.src('public/resources/images/*')
		.pipe(imagemin([
			imagemin.gifsicle(),
			mozjpeg(),
			pngquant(),
			imagemin.svgo()
		]))
		.pipe(gulp.dest('public/resources/images/min/'))
});

//Watch
gulp.task('watch', function(){
  gulp.watch('public/resources/sass/*.sass', ['sass']);
  gulp.watch('public/resources/js/*.js', ['js']);
  gulp.watch('public/resources/images/*', ['images']);
});

gulp.task('default', ['sass', 'js', 'images', 'watch']);