/**
imports
*/

var fs     = require('fs');
var gulp   = require('gulp');
var jade   = require('gulp-jade');
var stylus = require('gulp-stylus');
var rename = require("gulp-rename");
var prefix = require('gulp-autoprefixer');


/**
gulp tasks list
*/

gulp.task('content', function(){
  gulp.src('source/content/*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('examples'));
});


gulp.task('styles', function() {
  gulp.src('source/styles/**/*.styl')
    .pipe(stylus({errors: true}))
    .pipe(prefix())
    .pipe(gulp.dest('examples/styles'));

  gulp.src('source/styles/lib/*.css')
    .pipe(gulp.dest('examples/styles/lib'));
});


gulp.task('scripts', function() {
  gulp.src('source/scripts/**/*.js')
    .pipe(gulp.dest('examples/scripts'));
});


gulp.task('images', function() {
  gulp.src('source/images/*')
    .pipe(gulp.dest('examples/images'));
});


/**
gulp tasks used from cli
*/

gulp.task('default', ['content', 'styles', 'scripts', 'images']);

gulp.task('watch', function () {
  gulp.watch('source/**/*', ['default']);
});
