let humanScore = 0;
let computerScore = 0;

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
    let humanChoice = prompt("Enter your Choice: \nStone  Paper  Scissor ");
    return humanChoice.toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound( humanChoice, ComputerChoice ) {
    if (humanSelection === computerSelection) {

        console.log(`Draw! You both choose ${humanSelection}`);

    } else if ( (computerSelection === "stone" && humanSelection === "paper") || (computerSelection === "paper" && humanSelection === "scissor") || (computerSelection === "scissor" && humanSelection === "stone") ) {

        humanScore += 1;
        console.log(`You won! ${humanSelection} beats ${computerSelection}`);

    } else if ( (humanSelection === "stone" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "scissor") || (humanSelection === "scissor" && computerSelection === "stone") ) {

        computerScore += 1;
        console.log(`!!You lost ${computerSelection} beats ${humanSelection}`);

    } else {
        console.log("Enter a Valid Choice !!!");
    };
}


playRound( humanSelection, humanSelection );
console.log(humanScore);
console.log(computerScore)



