// var choices = ['rock' , 'paper', 'scissors'];
// var computerChoice = choices[Math.floor(Math.random()*choices.length)];
// var myChoice = null

// function rps(myChoice, computerChoice) {

// 	if (myChoice === computerChoice ) {
// 		console.log("It's a tie! Try again.")
// 	}
// 	else if (myChoice === "rock") {
// 		if (computerChoice === "paper") {
// 			console.log("The computer won.")
// 		}
// 		else if (computerChoice === "scissors") {
// 			console.log("You won.")
// 		}
// 	}
// 	else if (myChoice === "paper") {
// 		if (computerChoice === "rock") {
// 			console.log("You won.")
// 		}
// 		else if (computerChoice === "scissors") {
// 			console.log("The computer won.")
// 		}
// 	}
// 	else if (myChoice === "scissors") {
// 		if (computerChoice === "rock") {
// 			console.log("The computer won.")
// 		}
// 		else if (computerChoice === "paper") {
// 			console.log("You won.")
// 		}
// 	}
// }
var choices = ['rock' , 'paper', 'scissors'];
var computerChoice = choices[Math.floor(Math.random()*choices.length)];
var myChoice = null

var computerScore = 0;
var myScore = 0;

while (computerScore <= 3) || (myScore <= 3)
if (mychoice ===  computerChoice) {
	console.log("It's a tie!")
}
else if (mychoice === "rock" && computerChoice === "scissors" ) ||
		(mychoice === "scissors" && computerChoice === "paper" ) ||
		(mychoice === "paper" && computerChoice === "rock" ) {
			console.log("You won this round")
			myScore++
		}
else {
	console.log("The computer won this round.")
	computerScore++
}
