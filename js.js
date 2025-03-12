let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random == 0) {
        return "rock";
    } else if(random == 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

let rpsArray = ['rock', 'paper', 'scissors'];

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?: ");
    if (rpsArray.includes(choice.toLowerCase())) {
        return choice;
    } else {
        console.log("Invalid choice. Please enter: rock, paper, or scissors");
        getHumanChoice();
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
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Human: ${humanSelection}`);
        console.log(`Computer: ${computerSelection}`);
        round += 1;
        console.log(`Round: ${round}`);
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

//Invalid inputs are still being considered part of 
//the round and disrupts the game round amount

playGame();