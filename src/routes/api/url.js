/*Joey Fuller v1.0.0*/ 
/*Exports Express*/
module.exports = (express) => {

	/*Uses Router*/
	const router = express.Router();

	/*Makes SHORT url*/
	router.post('/urls', (req, res) => {
		var urlGen = require('../src/urlGen');
		req.body.short_url = urlGen.urlGen();
		res.json({short_url: req.body.short_url});

	});

	/*Returns router*/
	return router;
};