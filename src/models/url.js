/*Joey Fuller*/

/*Depends*/
const db = require('./db');

/*Create Crud*/
exports.create = (payload, err, success) => {
	db.url.create(payload).then(success).catch(err);
};

/*Read cRud*/
exports.findAll = (err, success) => {
	db.url.findAll().then(success).catch(err);
};

exports.findId =(payload, err, success) => {
	db.url.find({
		where: {
			id: payload.id,
		},
		include: ({
			all: true,
			nested: true,
		})
	}).then(success).catch(err);
};

exports.findShortURL =(payload, err, success) => {
	db.url.find({
		where: {
			id: payload.id,
		},
		include: ({
			all: true,
			nested: true,
		})
	}).then(success).catch(err);
};

/*Update crUd*/
exports.update = (payload, err, sucess) => {
	db.url.find({
		where: {
			id:payload.id,
		}
	}).then((existingData) => {
		existingData.updateAttributes(payload).then(success).catch(err);
	}).catch(err);
};

/*Delete cruD*/
exports.delete = (payload, err, success) => {
	db.url.destroy({
		where: {
			id: payload.id,
		}
	}).then(sucess).catch(err);
};