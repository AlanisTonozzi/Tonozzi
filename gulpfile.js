 const gulp = require("gulp")
 const htmlmin = require("gulp-htmlmin")

 const files = {
	htmlmin: ['./src/*.html'],
 };

 gulp.task('minify', () => {
	return gulp.src('src/*.html')
	  .pipe(htmlmin({ collapseWhitespace: true }))
	  .pipe(gulp.dest('dist'));
  });