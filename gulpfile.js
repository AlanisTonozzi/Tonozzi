 const gulp = require("gulp")
 const htmlmin = require("gulp-htmlmin")
 const cleanCSS = require('gulp-clean-css');

 const files = {
	htmlmin: ['./src/*.html'],
 };

 gulp.task('minify', () => {
	return gulp.src('src/*.html')
	  .pipe(htmlmin({ collapseWhitespace: true }))
	  .pipe(gulp.dest('dist'));
  });

  gulp.task('minify-css', () => {
	return gulp.src('styles/*.css')
	  .pipe(cleanCSS({compatibility: 'ie8'}))
	  .pipe(gulp.dest('dist'));
  });
  

