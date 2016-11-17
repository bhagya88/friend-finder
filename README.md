#Friend Finder 
A full stack dating app where you can find a friend of greatest compatibilty by answering a questionaire. 

### Demo
[Click to watch demo.](https://lit-stream-57477.herokuapp.com)

### Technologies used 
* Node.js
* Express module
* Body Parser module
* Front end - HTML, CSS, MaterializeCSS, Javascript, Jquery and AJAX.

### Design

* SERVER- Created Express server that listens for GET and POST requests.
* MIDDLEWARE- Used body parser middle ware to make request more easier to handle.
* ROUTING - Added routing for HTML files (GET requests) and APIs (GET and POST requests) in seperate files.



### Challenges faced         
* Comparing user scores with other users scores, calculating the compatibility score against each user and then picking the best match.

### Solutions found
* Made use of bulit in functions on Array.prototype
map
forEach
filter

* Called Math.min to find minimum number in an array
Math.min.apply(null,array)
	

### How it works
1. The survey has 10 questions the user has to answer in addition to providing his name and picture. Each answer has a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Once the user submits the survey. The picture of his best match is displayed in modal pop up.
 

#### Developed by Bhagya