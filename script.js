function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "stone";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissor";
    };
}

function getHumanChoice() {
    let choice = humanChoice = prompt("Enter your Choice: ");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound( humanChoice, ComputerChoice ) {

}

function playGame() {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


/* PSEUDOCODE

*/