const gulp = require("gulp")
const htmlmin = require("gulp-htmlmin")
const cleanCSS = require('gulp-clean-css');


gulp.task('minify', () => {
return gulp.src('src/*.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
return gulp.src('./src/**/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist'));
});

gulp.task("build", gulp.parallel(["minify", "minify-css"]))



gulp.task("build:watch", () => {
	gulp.watch('./src/**/*.*', gulp.series(['build']))
})