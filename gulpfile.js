const gulp         = require('gulp');
const exec         = require('child_process').exec;
const {src, dest, task}  = require('gulp');
const {series}   = require('gulp');


gulp.task('documentation', function (cb) {
  exec('node ./gen-documentation.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);  });
})


const documentation      = task('documentation');

exports.default = series(documentation));
