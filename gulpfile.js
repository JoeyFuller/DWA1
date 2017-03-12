const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;

//add task
gulp.task('addAll', function() {

//pull source of all files
  return gulp.src('./gulpfile.js')
    .pipe(git.add());

});

//add task
gulp.task('commit', function() {

//commit source of all files
return gulp.src('./gulpfile.js')
  .pipe(git.commit('auto commit..'));

});

//add task
gulp.task('everything', ['addAll', 'commit']);