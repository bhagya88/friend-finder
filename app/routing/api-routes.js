// friends module has all data and functions that operate on that data
var friends = require('../data/friends.js');

module.exports = function(app){
	app.get('/friends',function(req,res){
		res.json(JSON.stringify(friends.getAllFriends()));

	});

	app.post('/friends',function(req,res){
		console.log(req.body);
		res.json(JSON.stringify(friends.findFriend(req.body)));

	});

}