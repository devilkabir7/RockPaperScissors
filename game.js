"use strict"

function genComputerChoice() {

    let currentChoice = Math.round(Math.random() * 10) % 3;

    switch(currentChoice) {
 
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

function getHumanChoice() {

    let currentChoice = "";
    do {
        currentChoice = prompt("Rock, Paper, Scissors?");
    }while(currentChoice != "Rock" && currentChoice != "Paper" && currentChoice != "Scissors");

    return currentChoice;
}
