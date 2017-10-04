var choices = ['rock' , 'paper', 'scissors'];
var computerChoice = choices[Math.floor(Math.random()*choices.length)];
var myChoice = null

function rps(myChoice, computerChoice) {

	if (myChoice === computerChoice ) {
		console.log("It's a tie! Try again.")
	}
	else if (myChoice === "rock") {
		if (computerChoice === "paper") {
			console.log("The computer won.")
		}
		else if (computerChoice === "scissors") {
			console.log("You won.")
		}
	}
	else if (myChoice === "paper") {
		if (computerChoice === "rock") {
			console.log("You won.")
		}
		else if (computerChoice === "scissors") {
			console.log("The computer won.")
		}
	}
	else if (myChoice === "scissors") {
		if (computerChoice === "rock") {
			console.log("The computer won.")
		}
		else if (computerChoice === "paper") {
			console.log("You won.")
		}
	}
}