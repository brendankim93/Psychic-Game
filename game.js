var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
for (i=0; i<lettersArray.length; i++) {
	console.log(lettersArray[i]);
}

var userGuesses = []; 

var userWins = 0;

var userLosses = 0;

var guessesLeft = 10;

var computerSelection;

function getNewComputerGuess() {
      computerSelection = lettersArray[Math.floor(Math.random()*lettersArray.length)];
      console.log("computer guess is " + computerSelection);
    }

function gameReset(){
	userGuesses = [];
	guessesLeft = 10;
	getNewComputerGuess();
	//clear all the userGuesses 
	//keep the score the same 
	//guessesLeft returns to 10 
	//html display the wins and losses and letters
}

getNewComputerGuess();

document.onkeyup = function (event)
{
	    var currentUserguess = event.key;
	    //all currentUserguess is lowercase
	    var currentUserguesslower = currentUserguess.toLowerCase();
	    console.log("current user guess " + currentUserguesslower);
	    console.log("computer guess is " + computerSelection);

	if (guessesLeft === 0) 
	{
		gameReset();
		userLosses++;
		console.log("user losses " + userLosses);
	}

	else 
	{
		//continue playing the game
		if (currentUserguesslower === computerSelection) 
		{
		userWins++;
		console.log("user wins " + userWins);
		gameReset();
		}

		else 
		{
			//log the currentUserguess into userGuesses 
			guessesLeft--;
			console.log("guesses left " + guessesLeft);
			userGuesses.push(currentUserguesslower);
			console.log("user guesses " + userGuesses);
			//guessesLeft goes down by 1
		}
	}
	var html = document.querySelector("#psychic").innerHTML = 
			"<p>Wins: " + userWins + "</p>" +
		
			"<p>Losses: " + userLosses + "</p>" +
		
			"<p>Guesses Left: " + guessesLeft + "</p>" +
		
			"<p>Your Guesses so far: " + userGuesses + "</p>" 
}


//if guessesLeft = 0 then stop game

//see if currentUserguess is equal to computerSelection 

//computer's guess is randomly generated

//number of guesses goes down by 1 after each attempt

//each guess is documented on the page until user guesses correctly 

//number of wins increases by 1 when user guesses the letter correctly 

//game is reset after user guesses the right letter 