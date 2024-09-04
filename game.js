"use strict"

let playerScore = 0;
let computerScore = 0;

function genComputerChoice() {

    let currentChoice = Math.round(Math.random() * 10) % 3;

    switch(currentChoice) {
 
        case 0: 
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {

    let currentChoice = "";
    do {
        currentChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    }while(currentChoice != "rock" && currentChoice != "paper" && currentChoice != "scissors");

    return currentChoice;
}

function compareToRock(computerChoice) {

    switch(computerChoice) {

        case "rock":
            console.log("It's a tie");
            break;
        case "paper":
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            break;
        case "scissors":
            playerScore += 1;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
            break;
    }

}

function compareToPaper(computerChoice) {

    switch(computerChoice) {

        case "rock":
            playerScore += 1;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
            break;
        case "paper":
            console.log("It's a tie");
            break;
        case "scissors":
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            break;
    }
}

function compareToScissors(computerChoice) {

    switch(computerChoice) {

        case "rock":
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            break;
        case "paper":
            playerScore += 1;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
            break;
        case "scissors":
            console.log("It's a tie");
            break;
    }
}
function playRound(playerChoice, computerChoice) {

    switch(playerChoice) {

        case "rock":
            compareToRock(computerChoice);
            break;
        case "paper":
            compareToPaper(computerChoice);
            break;
        case "scissors": 
            compareToScissors(computerChoice);
            break;
    }
}

let playerChoice = getHumanChoice()
let computerChoice = genComputerChoice()

playRound(playerChoice, computerChoice);