var gulp = require("gulp");
var concat = require("gulp-concat");
var sass = require("gulp-sass")(require("sass"));

gulp.task("styles", function () {
  return gulp
    .src("project/css/main.scss")
    .pipe(sass()) // { outputStyle: "compressed" }
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("watch", function () {
  gulp.watch("project/css/**/*.scss", gulp.series("styles"));
});
