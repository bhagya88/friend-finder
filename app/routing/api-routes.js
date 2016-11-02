var path = require('path');
var friends = require('../data/friends.js');
module.exports = function(app){
	app.get('/friends',function(req,res){
		res.json(JSON.stringify(friends.getAllfriends());

	});

	app.post('/friends',function(req,res){
		res.sendFile(path.join(_dirname,'survey.html'));

	});

}