let gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean-css'),
  hash = require('gulp-hash'),
  del = require('del');

let styles = ['app/styles/styles.scss', 'app/styles/fonts.scss'],
  destination = 'build';

gulp.task('styles-delete', function () {
  return del(['build/*.css', 'build/*.css.map'])
});

gulp.task('clean', function () {
  return del(['build/*'])
});

gulp.task('styles-release', function () {
  return gulp.src(styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(clean())
    .pipe(hash())
    .pipe(gulp.dest(destination));
});

gulp.task('styles-debug', function () {
  return gulp.src(styles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    //.pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination));
});

gulp.task('styles-watch', gulp.series('styles-delete', 'styles-debug', function () {
  return gulp.watch(['app/styles/**/*.scss'], gulp.series('styles-debug'));
}));

gulp.task('debug', gulp.series('styles-delete', 'styles-debug'));

gulp.task('resease', gulp.series('styles-delete', 'styles-release'));



