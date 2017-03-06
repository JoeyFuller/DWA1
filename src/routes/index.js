/*Joey Fuller v1.0.0*/ 
/*Home Page*/

/*Depends*/
const url = require('../models/url');

/*Use Router*/
module.exports = (express) => {
	/*Uses Router*/  
	const router = express.Router();

	/*Home Page GET*/
	router.get('/', (req, res) => {
		res.json({ Hello: 'The URL shortner API by Joey Fuller'});
	});

	/*URL ReDirect*/

	router.get('/go/:shortURL', (req,res) => {
		req.body.shortURL = req.params.shortURL;
		url.findShortURL(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.redirect("http://www."+data.longURL);
		})

	});


	/*API USE*/
	router.use('/api/v1', require('./api/url.js')(express));

	/*Returns router*/
	return router;
};
