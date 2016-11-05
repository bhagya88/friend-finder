// friends module has all data and functions that operate on that data
var friends = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends',function(req,res){
		console.log(JSON.stringify(friends.getAllFriends(),null,2));
		res.json(friends.getAllFriends());

	});

	app.post('/api/friends',function(req,res){
		console.log(req.body);
		res.json(friends.findFriend(req.body));

	});

}