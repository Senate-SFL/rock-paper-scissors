let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random == 0) {
        return "Rock";
    } else if(random == 1) {
        return "Paper";
    } else {
        return "Scissors";
    };
};

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?: ");
    if(choice == "rock") {
        return "rock";
    } else if(choice == "paper") {
        return "paper";
    } else if(choice == "scissors") {
        return "scissors";
    } else {
        console.log("Invalid input, Enter: rock, paper, or scissors"); 
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper')) {
        return humanScore += 1;
    } else if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else {
        return computerScore += 1;
    }
}

let round = 0;

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice().toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        playRound(humanSelection, computerSelection);
        console.log(`Human: ${humanSelection}`);
        console.log(`Computer: ${computerSelection}`);
        round += 1;
        console.log(`Round: ${round}`);
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

playGame();