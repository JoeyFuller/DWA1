/* Joey Fuller v1.4.0 */
/* Home Page */

/* Depends*/
const url = require('../models/url');
const chalk = require('chalk');
const util = require('logging_fuller');

const success = chalk.green;
const error = chalk.red;

/* Use Router */
module.exports = (express) => {
/* Uses Router */
  const router = express.Router();

/* Home Page GET*/
  router.get('/', (req, res) => {
    res.json({ Hello: 'The URL shortner API by Joey Fuller' });
    util.debug(success('Success: Home page loaded!'));
  });

/* URL ReDirect*/

  router.get('/go/:shortURL', (req, res) => {
    req.body.shortURL = req.params.shortURL;
    url.findShortURL(req.body, (err) => {
      util.debug(error('Error: Long URL load failed', err));
      res.status(500).json(err);
    }, (data) => {
      util.debug(success('Success: Orginal URL loaded', data));
      res.redirect('http://www.' + data.longURL);
    });
  });


/* API USE*/
  router.use('/api/v1', require('./api/url.js')(express));

/* Returns router*/
  return router;
};
