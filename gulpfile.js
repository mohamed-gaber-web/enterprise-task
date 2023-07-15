// var gulp = require("gulp");
// var concat = require("gulp-concat");
// var sass = require("gulp-sass")(require("sass"));
// var minify = require("gulp-minify");
// var imagemin = require("gulp-imagemin");

import gulp from "gulp";
import minifyImage from "gulp-imagemin";
import concat from "gulp-concat";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import minify from "gulp-minify";

gulp.task("styles", function () {
  return gulp
    .src("project/css/main.scss")
    .pipe(sass()) // { outputStyle: "compressed" }
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", function () {
  return (
    gulp
      .src("project/js/*.js")
      .pipe(minify())
      // .pipe(concat("main.css"))
      .pipe(gulp.dest("dist/js"))
  );
});

gulp.task("images", function () {
  return gulp
    .src("project/images/*")
    .pipe(minifyImage())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("watch", function () {
  gulp.watch("project/images/*", gulp.series("images"));
  gulp.watch("project/css/**/*.scss", gulp.series("styles"));
  gulp.watch("project/js/**/*.js", gulp.series("scripts"));
});
