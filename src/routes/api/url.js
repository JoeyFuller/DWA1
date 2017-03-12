/*Joey Fuller v1.0.0*/

/*Depends*/
const url = require('../../models/url');
const util = require('../../lib/util');

/*Exports Express*/
module.exports = (express) => {

	/*Uses Router*/
	const router = express.Router();

	/*Makes SHORT url Crud*/
	router.post('/urls', (req, res) => {
		var urlGen = require('../../lib/urlGen');
		req.body.shortURL = urlGen.urlGen();
		url.create(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(err);
		});
	});

	/*Read URLS cRud*/
	router.get('/urls', (req, res) => {
		url.findAll((err) => {
			util.debug('Access Denied: Full data read', err, 'error');
			res.status(500).json(err);
		}, (data) => {
			util.debug('Access Granted: Full data read', data, 'success');
			res.status(200).json(data);
		})
	});

	/*Read Id*/
	router.get('/urls/:id', (req, res) => {
		req.body.id = req.params.id;
		url.findID(req.body, (err) => {
			util.debug('Access Denied: Single data read', err, 'error');
			res.status(500).json(err);
		}, (data) => {
			util.debug('Access Granted: Single data read', data, 'success');
			res.status(200).json(data);
		})
	});

	/*Update URLS crUd*/
	router.post('/urls/:id', (req, res) => {
		req.body.id = req.params.id;
		url.update(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

	/*Delete URLS cruD*/
	router.delete('/urls/:id', (req, res) => {
		req.body.id = req.params.id;
		url.destroy(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

	/*Returns router*/
	return router;
};