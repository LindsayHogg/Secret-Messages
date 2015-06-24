/*
	Secret Messages
	---------------------------------------
	Ever thought it would be cool to be able to talk to your
	friends with a secret language that only you and your
	friends know? Well, we can work a simple implementation
	to encode our messages and do just that! For simplicity,
	we will work with only lowercase messages.

	You are provided two getter functions that retrieve your
	encoding letters (getKey()) and the lower case letters
	of the alphabet (getLetters()).

	In order to implement this, we require two functions:

		1. encode(message)
			- Provided a message, the function gets the letters
			  of the alphabet from the getLetters() function
			  along with the encoding string from the getKey()
			  function and swaps the lowercase letter from the 
			  message with the corresponding letter from the 
			  key.
		2. decode(message)
			- Provided an encoded message, thsi function will
			  use the same key to decode the message by swapping
			  the encoded letters in the message with the correct
			  letters from the alphabet.

	NOTE: It may be useful to use the String.indexOf(char) 
	method.
*/

//	Write your code here between the lines:
//	--------------------------------------- 
// var secretCode = prompt("Enter a message in our secret language");

var str = prompt("Enter a message or a secret code, tell me all the things!");

var arr = str.split('')

encodedMessage = arr.map(function(element, index) {
	var sourceIndex = getLetters().indexOf(element)
	var encodedCharacter = getKey()[sourceIndex]
	return encodedCharacter
})

alert( encodedMessage.join('') ) 

message = arr.map(function(element, index) {
	var sourceIndex = getKey().indexOf(element)
	var encodedCharacter = getLetters()[sourceIndex]
	return encodedCharacter
})

alert( message.join('') ) 

//  ---------------------------------------

// 	Provided Code:
// 	---------------------------------------

// Key to encrypt message with.
function getKey() {
	return "!@#$%^&*()_-+=[]{}>.<,~`109";
}

// Lowercase letters.
function getLetters() {
	return "abcdefghijklmnopqrstuvwxyz ";
}

// "hello"


// function encode () {
// 	message = str.indexOf(getKey); 
// 	console.log(encode);
// }



// function decode () {
// 	var y = str.indexOf(message); 
// 	console.log(y);
// }

// if statement - that if the input from the promt contains alphabetic - use that string? and get the indexOF getKey
// 	console.log the outcome of that getKey index 

// or if the input message is coded - use that string? and get the indexOf getLetters
// 	console.log the outcome of that getLetters index 



// ["h", "e", "l", "l", "o"]
// ["a", "b", "c"].forEach(func)

// for (i=0; i < array.length; i++ ) {
// 	var sourceIndex = getLetters().indexOf(character);
// 	getKey()[sourceIndex]
// }

// encodedMessage = arr.map(function(element, index) {
// 	var sourceIndex = getLetters().indexOf(element)
// 	var encodedCharacter = getKey()[sourceIndex]
// 	return encodedCharacter
// })

// alert( encodedMessage.join('') ) 





// 1. splitting the string into an array
// 2. for each of the characters, i'll find a corresponding index value in the getLetters() at the same index
// 3. join the encoded characters