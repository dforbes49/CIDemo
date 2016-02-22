/// <binding />
var gulp = require("gulp");
var msbuild = require("gulp-msbuild");

gulp.task("default", function () {
    return gulp.src('../CIDemo.sln')
      .pipe(msbuild({
          targets: ['Rebuild'],
          toolsVersion: 14.0,
          errorOnFail: true,
          stdout: 'true',
          verbosity: 'normal',
          logCommand: true
      })
       );
});


