var chalk = require('chalk');



exports.debug = (title, obj, status) => {
  var seperator = '\n==================================\n';
  const output = seperator + title + seperator;

  var error = chalk.bold.red;
  console.log(error('Error!'));
  if (!status) {
    status = '';
  }
  if (process.env.DEBUG) {
    console.log(error(output), obj, status);
  }
};