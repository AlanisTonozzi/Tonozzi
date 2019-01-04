const gulp = require("gulp")
const htmlmin = require("gulp-htmlmin")
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


gulp.task('minify', () => {
    return gulp.src('src/*.html')
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest('dist'));
});
gulp.task("image", () =>{
    return gulp.src('client/templates/*.pug')
    .pipe(gulp.dest(''));
})

gulp.task('minify-css', () => {
    return gulp.src('./src/**/*.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('dist'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("*.html").on("change", reload);
});

gulp.task("build", gulp.parallel(["minify", "minify-css","serve"]));



gulp.task("build:watch", () => {
    gulp.watch('./src/**/*.*', gulp.series(['build']))
})

gulp.task("servidor", gulp.parallel(['build:watch', "serve"]));






