var gulp   = require('gulp');
var ejs    = require('gulp-ejs');
var concat = require('gulp-concat');
var rename = require('gulp-rename');


gulp.task('build-html', function () {
  return gulp.src('src/*.ejs')
    .pipe(ejs())
    .pipe(rename(function (path) {
      path.extname = '.html';
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-css', function () {
  return gulp.src('src/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist'));
})

gulp.task('move-img', function (){
  return gulp.src('src/components/**/*.{gif,jpg,png,svg}')
  .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('dist/img'))
})

gulp.task('build', ['build-html', 'build-css', 'move-img']);
