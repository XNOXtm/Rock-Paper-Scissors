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

function playRound( humanSelection, computerSelection ) {
    if (humanSelection === computerSelection) {

        scoreBoard();
        const container = document.querySelector("#result-announcement");
        
        container.textContent = `Draw you both choose ${humanSelection}`;

    } else if ( (computerSelection === "stone" && humanSelection === "paper") || (computerSelection === "paper" && humanSelection === "scissor") || (computerSelection === "scissor" && humanSelection === "stone") ) {
        
        humanScore += 1;
        scoreBoard();
        const container = document.querySelector("#result-announcement");
        
        container.textContent = `You won! ${humanSelection} beats ${computerSelection}`;
        
    } else {
        
        computerScore += 1;
        scoreBoard();
        const container = document.querySelector("#result-announcement");
        
        container.textContent = `!!You lost ${computerSelection} beats ${humanSelection}`;
    }
}

function scoreBoard() {
    const displayScore = document.querySelector("#scoreBoard");
    if (humanScore === 5) {
        displayScore.textContent = "!!! YOU WON !!!";
    } else if (computerScore === 5) {
        displayScore.textContent = "YOU LOST";
    } else {
         displayScore.textContent = `Your Score: ${humanScore}     Computer Score: ${computerScore}`;
    }
}

const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissor = document.getElementById("Scissor");

rock.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("stone", computerSelection);
});

paper.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});

scissor.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissor", computerSelection);
});






