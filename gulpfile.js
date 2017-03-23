/* joey fuller */
/* dependencies */
const gulp = require('gulp');
const git = require('gulp-git');
const edit = require('gulp-json-editor');

const packjson = require('./package.json');
const util = require('logging-fuller');
const verbump = require('./src/lib/verbump');

const version = packjson.version.split('.');
const argv = require('yargs').argv;
const number = argv.n;
const fs = require('fs');

/* arguments test */
if ((argv.v === 'major' || argv.v === 'minor' || argv.v === 'patch') && typeof argv.n === 'number') {
  if (argv.v === 'major') {
    version[0] = number;
  } else if (argv.v === 'minor') {
    version[1] = number;
  } else if (argv.v === 'patch') {
    version[2] = number;
  }

/* write new version */
  packjson.version = version.join('.');
  fs.writeFile('./package.json', JSON.stringify(packjson, null, 4), (err) => {
    if (err) {
      return console.log(err);
    }
/* success */
    console.log(argv.v, ' has been updated to ', argv.n);
  });
} else {
/* error */
  console.log('Please verify your arguments.');
}
 /* export */
module.exports = verbump;

/* add to git */
gulp.task('add', () => {
  return gulp.src('./')
  .pipe(git.add({ args: '-A' }));
});

/* git commit */
gulp.task('commit', () => {
  return gulp.src('./')
  .pipe(git.commit('commit'));
});

/* git push feature */
gulp.task('featPush', ['add', 'commit'], () => {
  git.push('origin', 'feature', (err) => {
    if (err) throw err;
  });
});

/* git push master */
gulp.task('mastPush', ['add', 'commit'], () => {
  git.push('origin', 'master', (err) => {
    if (err) throw err;
  });
});

/* verbump patch */
gulp.task('patch', () => {
  gulp.src('./package.json')
    .pipe(edit({
      version: util.verbump(packjson.version, 'patch'),
    }))
    .pipe(gulp.dest('./'));
});

/* verbump minor */
gulp.task('minor', () => {
  gulp.src('./package.json')
  .pipe(edit({
    version: util.verbump(packjson.version, 'minor'),
  }))
  .pipe(gulp.dest('./'));
});

/* verbump major */
gulp.task('major', () => {
  gulp.src('./package.json')
  .pipe(edit({
    version: util.verbump(packjson.version, 'major'),
  }))
  .pipe(gulp.dest('./'));
});