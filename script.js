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
        
        const container = document.querySelector("#result-announcement");

        container.textContent = `Draw you both choose ${humanSelection}`;

    } else if ( (computerSelection === "stone" && humanSelection === "paper") || (computerSelection === "paper" && humanSelection === "scissor") || (computerSelection === "scissor" && humanSelection === "stone") ) {
        
        humanScore += 1;
        const container = document.querySelector("#result-announcement");

        container.textContent = `You won! ${humanSelection} beats ${computerSelection}`;
        
    } else {
        
        computerScore += 1;
        const container = document.querySelector("#result-announcement");
        
        container.textContent = `!!You lost ${computerSelection} beats ${humanSelection}`;
    }
}

// playGame();
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






