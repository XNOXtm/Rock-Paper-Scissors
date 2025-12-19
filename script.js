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

let humanScore = 0;
let computerScore = 0;

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
    }
}

let count = 0;

function playGame() {
    playRound( humanSelection, computerSelection);
    console.log(`Your score: ${humanScore} \nComputer score: ${computerScore}`); 
    count++;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

while (count < 5) {
    playGame();
}


/* 
1. Take humanchoice (out of rock, paper, scissor).
2. Get computerschoice 
3. Compare both inputs:
    if both rock || scissor || stone:
        draw
    else if (computerchoice = stone && humanchoice = paper) || (computerchoice = paper && humanchoice = scissor) || (computerchoice = scissor && humanchoice = stone) :
        you won {humanchoice} beats {computchoice}
        humanscore += 1
    else :
        you lost {computerchoice} beat {humanchoice}
        computerscore += 1
    
*/