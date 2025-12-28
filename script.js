let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

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

// function getHumanChoice() {
//     let humanChoice = prompt("Enter your Choice: \nStone  Paper  Scissor ");
//     return humanChoice.toLowerCase();
// }

function playRound( humanSelection, computerSelection ) {
    if (humanSelection === computerSelection) {
        
        return `Draw! You both choose ${humanSelection}`;
        
    } else if ( (computerSelection === "stone" && humanSelection === "paper") || (computerSelection === "paper" && humanSelection === "scissor") || (computerSelection === "scissor" && humanSelection === "stone") ) {
        
        humanScore += 1;
        return `You won! ${humanSelection} beats ${computerSelection}`;
        
    } else if ( (humanSelection === "stone" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "scissor") || (humanSelection === "scissor" && computerSelection === "stone") ) {
        
        computerScore += 1;
        return `!!You lost ${computerSelection} beats ${humanSelection}`;
        
    } else {
        return "Enter a Valid Choice !!!";
    };
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
        
    console.log(playRound( humanSelection, computerSelection ));
    
    if (humanScore > computerScore) {
        console.log("Congratulations!! You won the overall game")
    } else if (humanScore < computerScore) {
        console.log("Sorry!! \n Unfortunetly you lost to computer")
    } else {
        console.log("Aww its a draw ")
    };
}

playGame();





