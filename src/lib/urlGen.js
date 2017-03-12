/* Joey Fuller v1.4.0 */
/* Rangen function */
function urlGen() {
  /* Base for random URL*/
  const base = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXY23456789';
  /* Makes ranGen URl text = 5 characters */
  const urlGenTextLength = 5;
  const urlGenText = '';

  for (const i = 0; i < urlGenTextLength; i++) {
    urlGenText += base.charAt((Math.random()) * base.length);
  }
  /* Return function results to export */
  return urlGenText;
}

/* Export function results*/
exports.urlGen = urlGen;
