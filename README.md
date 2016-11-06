#Friend Finder - *A Full Stack Application*
This is kind of like a dating app where you can find a friend of greatest compatibilty by answering a questionaire. 

### Technologies used for this 
*Node.js
*Express module
*Body Parser module
*Front end - HTML, CSS, MaterializeCSS, Javascript, Jquery, AJAX.

### Design
*SERVER- Created Express server that listens for GET and POST requests.
*MIDDLEWARE- Used body parser middle ware to make request more easier to handle.
*ROUTING - Added routing for HTML files (GET requests) and APIs (GET and POST requests) in seperate files.
*DATA ENCAPSULATION- Created a data module with private data and public methods that provide data.

### How it works
1. The survey has 10 questions the user has to answer in addition to providing his name and picture. Each answer has a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Once the user submits the survey. The picture of his best match is displayed in modal pop up.
 
### Demo
[Click to watch demo.](https://lit-stream-57477.herokuapp.com)

### Problems entountered         
Comparing user scores with other users scores, calculating the compatibility score against each user and then picking the best match.

### Solutions found
	Made use of bulit in functions on Array.prototype
	 * `map`
	 * `forEach`
	Called Math.min to find minimum number in an array
	 * `Math.min.apply(null,array)
	


#### Developed by Bhagya