const gulp = require("gulp")
const htmlmin = require("gulp-htmlmin")
const cleanCSS = require("gulp-clean-css")
const clean = require("gulp-clean")

// BUILD

gulp.task("build:clean", () => {
  return gulp.src("./dist", { read: false, allowEmpty: true }).pipe(clean())
})

gulp.task("build:html", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"))
})

gulp.task("build:css", () => {
  return gulp
    .src("./src/**/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"))
})

gulp.task("build:assets:favicon", () => {
  return gulp.src("./src/favicon.ico").pipe(gulp.dest("dist"))
})
gulp.task("build:assets:assets", () => {
  return gulp.src("./src/assets/**/*").pipe(gulp.dest("dist/assets"))
})
gulp.task(
  "build:assets",
  gulp.parallel(["build:assets:favicon", "build:assets:assets"])
)

gulp.task(
  "build",
  gulp.series([
    "build:clean",
    gulp.parallel(["build:html", "build:css", "build:assets"])
  ])
)

// SERVE

gulp.task("serve", () => {
  gulp.series(["build"])()
  gulp.watch("./src/**/*", gulp.series(["build"]))
})
