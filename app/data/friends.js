// friends module
// It has the data also two functions that operate on that data
	module.exports = (function friends(){
		var friendsList = [{
	  name:"Deepika",
	  photo:"https://s-media-cache-ak0.pinimg.com/736x/7e/62/b7/7e62b78d989eb61b9bc23ee093f00a8b.jpg",
	  scores:[
	     5,
	     2,
	     4,
	     3,
	     5,
	     1,
	     2,
	     1,
	     4,
	     1
	   ]
	},

	{
	  name:"Katrina",
	  photo:"https://s-media-cache-ak0.pinimg.com/originals/ea/3f/55/ea3f55e7b609abf5ff8972f8bb0bf6e6.jpg",
	  scores:[
	     5,
	     2,
	     2,
	     4,
	     5,
	     1,
	     2,
	     5,
	     3,
	     1
	   ]
	},

	{
	  name:"Kangana",
	  photo:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Kangana_Ranaut_2013.jpg",
	  scores:[
	     5,
	     1,
	     4,
	     4,
	     5,
	     5,
	     2,
	     5,
	     4,
	     5
	   ]
	},

	{
	  name:"Parineeti",
	  photo:"http://sekho.in/wp-content/uploads/2015/10/Parineeti-Chopra-Upcoming-Movies-2016-2017-List-Release-Date.jpg",
	  scores:[
	     5,
	     3,
	     4,
	     4,
	     5,
	     3,
	     2,
	     5,
	     3,
	     1
	   ]
	},

	{
	   name:"Anushka",
	   photo:"https://s4.scoopwhoop.com/osi/Anu/6.jpeg",
	   scores:[
	     2,
	     2,
	     4,
	     4,
	     5,
	     2,
	     2,
	     5,
	     4,
	     2
	   ]
	},

	{
	  name:"Ranbir",
	  photo:"http://cdn.bollywoodtabloid.com/wp-content/uploads/2016/10/Ranbir-Kapoor-1.jpg",
	  scores:[
	     1,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     1,
	     4,
	     1
	   ]
	},

	{
	  name:"Ranveer",
	  photo:"http://media.indiatimes.in/media/content/2016/Feb/ranveer-singh_3_1454763936_725x725.jpg",
	  scores:[
	     5,
	     5,
	     4,
	     4,
	     5,
	     1,
	     1,
	     2,
	     4,
	     1
	   ]
	},

	{
	  name:"Amir",
	  photo:"http://www.contactphonenumberaddress.com/wp-content/uploads/2015/08/Aamir-Khan_4.jpg",
	  scores:[
	     3,
	     3,
	     2,
	     2,
	     1,
	     1,
	     4,
	     4,
	     4,
	     1
	   ]
	},

	{
	  name:"Salman",
	  photo:"http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/12/Pictures/salman-khan_ba0561a0-a0ac-11e5-94b5-bfaeb774c8f3.jpg",
	  scores:[
	     3,
	     2,
	     1,
	     4,
	     5,
	     3,
	     2,
	     1,
	     4,
	     5
	   ]
	},

	{
	  name:"Sharukh",
	  photo:"http://www.contactphonenumberaddress.com/wp-content/uploads/2015/08/Bollywood-Actor-Shah-Rukh-Khan.jpg",
	  scores:[
	     5,
	     1,
	     1,
	     1,
	     2,
	     2,
	     2,
	     2,
	     2,
	     3
	   ]
	},

	{
	  name:"Akshay",
	  photo:"http://media1.santabanta.com/full1/Indian%20%20Celebrities(M)/Akshay%20Kumar/akshay-kumar-19a.jpg",
	  scores:[
	     5,
	     5,
	     4,
	     4,
	     5,
	     1,
	     1,
	     1,
	     1,
	     1
	   ]
	}];



// returns an object with two functions that have access to the private data
return{
	// gets all friends 
	getAllFriends: function(){
		return friendsList;
	},

	// finds the most compatible friends by comparing the scores of each friend with the user's scores.
	findFriend: function(user){
			
		
						// map friendsList to inCompatibilityArr
						// inCompatibilityArr has inCompatibility scores of each friend with the user
						// inCompatibility is a measure of differences in opinions
						var inCompatibilityArr = friendsList.map(function(friend,index){

							// sets initial value to 0
							var inCompatibilityScore = 0;

							friend.scores.forEach(function(score,i){
								// takes absolute value of the difference in user score to corresponding friend's score to the same question 
								//and adds to compatibilityScore.
								inCompatibilityScore += Math.abs(score - user.scores[i]);
							});;

							// add the user information to an array
							friendsList.push(user);
							// return's the aggregate compatibityScore for that friend with the user
							return inCompatibilityScore;
								   

						});

						// find the minimum score in the inCompatibilityArr. Best match has least amount of inCompatibilityScore
						var minScore = Math.min.apply(null, inCompatibilityArr);

						// gets the index of minScore in the inCompatibilityArr 
						// then returns the corresponding friend from friendsList
						return friendsList[inCompatibilityArr.indexOf(minScore)];
						
				}



	}
})();