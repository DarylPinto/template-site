const gulp = require('gulp');
const babel = require('gulp-babel');
const cache = require('gulp-cached');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const sourcemap = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

//Sass
gulp.task('sass', () => {
	gulp.src('public/src/sass/style.sass')
		.pipe(sourcemap.init())
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('public/dist/css/'))
});

//Javascript
gulp.task('js', () => {
	gulp.src('public/src/js/*.js')
		.pipe(sourcemap.init())
			.pipe(babel())
			.pipe(gulp.dest('public/dist/js/babel-transpiled'))
			.pipe(uglify())
		.pipe(sourcemap.write())
		.pipe(gulp.dest('public/dist/js/min'))
});

//Image Optimization
gulp.task('images', () => {
	gulp.src('public/src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('public/dist/images'))
});

//Watch
gulp.task('watch', function(){
  gulp.watch('public/src/sass/*.sass', ['sass']);
  gulp.watch('public/src/js/*.js', ['js']);
  gulp.watch('public/src/images/*', ['images']);
});

gulp.task('default', ['sass', 'js', 'images', 'bundlejs']);