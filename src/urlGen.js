/*Joey Fuller v1.0.0*/ 
/*Rangen function*/
function urlGen(){
	/*Base for random URL*/
	const base = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXY23456789';
	/*Makes ranGen URl text = 4 characters*/
	var urlGen_text_length = 4;
	var urlGen_text = '';

	for(var i = 0; i < urlGen_text_length; i+=) {
		urlGen_text += base.charAt((Math.random())*base.length);
	};
	/*Return function results to export*/
	return urlGen_text;
}

/*Export function results*/
exports.urlGen = urlGen;