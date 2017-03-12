const chalk = require('chalk');

exports.debug = (title, obj, status) => {
  const seperator = '\n==================================\n';
  const output = seperator + title + seperator;

  const error = chalk.bold.red;
  console.log(error('Error!'));
  if (!status) {
    status = '';
  }
  if (process.env.DEBUG) {
    console.log(error(output), obj, status);
  }
};
