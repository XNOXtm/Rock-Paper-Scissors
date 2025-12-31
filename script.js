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
        const container = document.querySelector("#round-result");
        container.textContent = `DRAW`;

        const reason = document.querySelector("#reason");
        reason.textContent = `You both choose ${humanSelection}`;

    } else if ( (computerSelection === "stone" && humanSelection === "paper") || (computerSelection === "paper" && humanSelection === "scissor") || (computerSelection === "scissor" && humanSelection === "stone") ) {
        
        humanScore += 1;
        scoreBoard();
        const container = document.querySelector("#round-result");
        container.textContent = `YOU WIN`;

        const reason = document.querySelector("#reason");
        reason.textContent = `${humanSelection} beats ${computerSelection}`;
        
    } else {
        
        computerScore += 1;
        scoreBoard();
        const container = document.querySelector("#round-result");
        container.textContent = `YOU LOST`;

        const reason = document.querySelector("#reason");
        reason.textContent = `${computerSelection} beats ${humanSelection}`;
    }
}

function scoreBoard() {
    const displayScore = document.querySelector("#scoreBoard");
    const finalResult = document.querySelector("#final-result");
    if (humanScore === 5) {
        finalResult.textContent = "YOU WON";
        finalResult.style.fontSize = "50px"
        finalResult.style.fontWeight = "bold";
        
    } else if (computerScore === 5) {
        finalResult.textContent = "YOU LOST COMPUTER WINS";
        finalResult.style.fontSize = "50px"
        finalResult.style.fontWeight = "bold";
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






