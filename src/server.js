/*Joey Fuller v1.0.0*/ 
/*Dependencies*/
const express = require('express');
const body_parser = require('body-parser');
const util = require('../src/lib/util');
require("dotenv").config();

/*Express*/
const app = express();

/*Body Parser*/
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

/*Express to Routes*/
app.use('/', require('../src/routes/index.js')(express));

/*Port to listen on*/
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
	util.debug('Server active on', port);
	//console.log('Server active on', port, 'until I break it again..'); //console log to show server active
});

/*Export Server*/
module.exports = server;