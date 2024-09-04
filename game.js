"use strict"

function genComputerChoice() {

    let currencChoice = Math.round(Math.random() * 10) % 3;

    switch(currencChoice) {
 
        case 0: 
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

console.log(genComputerChoice());