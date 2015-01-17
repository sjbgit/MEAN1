/**
 * Created by sbunke on 1/16/2015.
 */
var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('js', function () {
    gulp.src(['ng/modules/main.module.js', 'ng/**/*.js'])
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('assets'))
})

/*
var gulp = require('gulp');

gulp.task('welcome', function () {
    console.log('welcome to gulp!')
})

gulp.task('hello', ['welcome'], function() {
    console.log('hello world');
})
    */