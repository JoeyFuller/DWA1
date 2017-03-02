/*Joey Fuller v1.0.0*/ 
/*Dependencies*/
const express = require('express');
const body_parser = require('body-parser');

/*Express*/
const app = express();

/*Body Parser*/
app.use(body_parser.json());

/*Express to Routes*/
app.use('/', require('../src/routes/index.js')(express));

/*Port to listen on*/
const port = 3000;
const server = app.listen(port, function(){
	console.log('Server active on', port, 'hopefully...'); //console log to show server active
});

/*Export Server*/
module.exports = server;