'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task para o sass
gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

//task para o watch
gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});

//task para default
gulp.task('default', ['sass']);