var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('unit-tests', function () {
    return gulp.src('qa/tests-api.js')
        .pipe(mocha({ui: 'tdd'}));
});

gulp.task('default', ['unit-tests'], function () {});