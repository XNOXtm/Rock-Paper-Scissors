function getComputerChoice() {
    num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Stone";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissor";
    };
}
console.log(getComputerChoice())

function getHumanChoice() {
    return humanChoice = prompt("Enter your Choice: ");
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