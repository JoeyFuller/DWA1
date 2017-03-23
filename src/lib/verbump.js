/* Depends */
const packjson = require('../../package.json');

const fs = require('fs');

/* stores args */
const argv = require('yargs').argv;

const version = packjson.version.split('.');
const number = argv.n;

const verbump = function () {
/* conditional */
  if ((argv.v === 'major' || argv.v === 'minor' || argv.v === 'patch') && typeof argv.n === 'number') {
    if (argv.v === 'major') {
      version[0] = number;
    } else if (argv.v === 'minor') {
      version[1] = number;
    } else if (argv.v === 'patch') {
      version[2] = number;
    }

/* stores version */
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
};

module.exports.verbump = verbump;
