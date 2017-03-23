/* Joey Fuller */

/* dependencies */
const url = require('../../src/models/url');

/* Express */
module.exports = (express) => {
	const router = express.router();
/* route status */
	router.get('/status', (req, res) => {
		res.json({
			healthy: true,
		});
	});
/* route read */
   router.get('/:shortURL', (req, res) => {
     const request = req;
     const response = res;

     request.body.shortUrl = request.params.shortUrl;
     url.findShortUrl(request.body, (err) => {
     	response.status(500).json(err);
     }, (data) => {
     	response.redirect(data.longURL);
     });
   });
   return router;

};