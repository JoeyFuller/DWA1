const gulp = require('gulp');
const git = require('gulp-git');


/* add task */
gulp.task('addAll', () =>
/* pull source of all files */
  gulp.src('./gulpfile.js')
    .pipe(git.add()),
);

/* add task */
gulp.task('commit', () =>
/* commit source of all files */
  gulp.src('./gulpfile.js')
  .pipe(git.commit('auto commit..')),
);

/* add task */
gulp.task('everything', ['addAll', 'commit']);
