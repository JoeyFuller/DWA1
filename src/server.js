/* Joey Fuller v1.4.0 */
/* Dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const util = require('../src/lib/util');
require('dotenv').config();

/* Express */
const app = express();

/* Body Parser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Express to Routes */
app.use('/', require('../src/routes/index.js')(express));

/* Port to listen on */
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  util.debug('Server active on', port);
});

/* Export Server */
module.exports = server;
