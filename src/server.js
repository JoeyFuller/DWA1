/* Joey Fuller v1.4.0 */
/* Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const util = require('logging_fuller');
require('dotenv').config();

/* Chalk rules */
const active = chalk.magenta;
const envVar = chalk.white.dim;

/* Express */
const app = express();

/* Body Parser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Express to Routes */
app.use('/', require('../src/routes/index.js')(express));

/* Port to listen on */
const port = process.env.PORT || 3000;

util.logger(envVar('Env variable is definded as ' + process.env.DEBUG));

const server = app.listen(port, () => {
  util.logger(active('Did it work? I think its working on port ' + port + '! WOW IT IS!!'));
});

/* Export Server */
module.exports = server;
