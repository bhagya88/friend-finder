// friends module has all data 
var friends = require('../data/friends.js');

module.exports = function(app){

	// handle get request
	app.get('/api/friends',function(req,res){
		console.log(friends);
		res.json(friends);

	});

	// handle post requests
	app.post('/api/friends',function(req,res){
		console.log(req.body);
		res.json(findFriend(req.body));

	});

}


function findFriend(user){
	
	// remove user from friends if existing	

	friends = friends.filter(function(ele){
		return ele.name !== user.name;
	});

	console.log(friends);
	
	// map friendsList to inCompatibilityArr
	// inCompatibilityArr has inCompatibility scores of each friend with the user
	// inCompatibility is a measure of differences in opinions
	var inCompatibilityArr = friends.map(function(friend,index){

		// sets initial value to 0
		var inCompatibilityScore = 0;

		friend.scores.forEach(function(score,i){
			// takes absolute value of the difference in user score to corresponding friend's score to the same question 
			//and adds to compatibilityScore.
			inCompatibilityScore += Math.abs(score - user.scores[i]);
		});;

		// add the user information to an array
		
		// return's the aggregate compatibityScore for that friend with the user
		return inCompatibilityScore;
			   

	});
	friends.push(user);
	// find the minimum score in the inCompatibilityArr. Best match has least amount of inCompatibilityScore
	var minScore = Math.min.apply(null, inCompatibilityArr);

	// gets the index of minScore in the inCompatibilityArr 
	// then returns the corresponding friend from friendsList
	return friends[inCompatibilityArr.indexOf(minScore)];
	
}


