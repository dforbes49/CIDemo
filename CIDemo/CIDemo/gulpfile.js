/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var msbuild = require('gulp-msbuild');

gulp.task('default', function () {
    // place code for your default task here
});



gulp.task('build',  function () {
    return gulp
        .src('**/*.sln')
        .pipe(msbuild({
            toolsVersion: 14.0,
            targets: ['Clean', 'Build'],
            errorOnFail: true,
            verbosity: 'detailed',
            stdout: true
        }));
});
