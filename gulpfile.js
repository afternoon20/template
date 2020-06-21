// プラグインの読み込み
const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require("css-declaration-sorter");
const browserSync = require('browser-sync');

gulp.task("sass", function () {
  console.log('HelloWorld!');

  return gulp.src("./sass/**/*.scss")
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(postcss([cssdeclsort({ order: "alphabetical" })]))
    .pipe(gulp.dest("./css"));
});

gulp.task('browser-sync', function (done) {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  done();
});

gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});


gulp.task("watch", function () {
  gulp.watch("./sass/**/*.scss", gulp.task("sass"));
  gulp.watch("./sass/**/*.scss", gulp.task("bs-reload"));
  gulp.watch("./*.html", gulp.task("bs-reload"));
  gulp.watch("./css/*.css", gulp.task('bs-reload'));
  gulp.watch("./js/*.js", gulp.task("bs-reload"));

});

gulp.task("default", gulp.series(gulp.parallel("browser-sync", "watch")));