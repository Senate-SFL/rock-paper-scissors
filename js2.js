const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const p_history = document.getElementById('p-ul');
const p_score = document.getElementById('p-score');
const p_score_cont = document.getElementById('score-cont');
const c_score_cont = document.getElementById('score-cont-c');
const c_score = document.getElementById('c-score');
const c_history = document.getElementById('c-ul');
const c_input = document.getElementById('comp-input');
const tie = document.getElementById('tie');
var p_total = 0;
var c_total = 0;

function disableButton() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function checkForTie(player, computer) {
    if (player === computer) {
        return true;
    }
}

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

function winRound(playerChoice, computerChoice) {
    if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || 
    (playerChoice === 'Paper' && computerChoice === 'Rock') || 
    (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        p_score.textContent = p_total += 1;
        if (p_total === 5) {
            p_score_cont.style.backgroundColor = "#00ff0d";
            disableButton();
            alert('Player wins!');
        }
    } else if (playerChoice === computerChoice) {
        console.log("tie");
        tie.textContent = "TIE!";
        setTimeout(function() {
            tie.textContent = "";
        }, 3000);
    } else {
        c_score.textContent = c_total += 1;
        if (c_total === 5) {
            c_score_cont.style.backgroundColor = "#00ff0d";
            disableButton();
            alert('Computer wins!');
        }
    };
};


rock.addEventListener('mouseover', function() {
    rock.style.backgroundColor = "#999999";
});
rock.addEventListener('mouseout', function() {
    rock.style.backgroundColor = "#eeeeee";
});

paper.addEventListener('mouseover', function() {
    paper.style.backgroundColor = "#999999";
});
paper.addEventListener('mouseout', function() {
    paper.style.backgroundColor = "#eeeeee";
});

scissors.addEventListener('mouseover', function() {
    scissors.style.backgroundColor = "#999999";
});
scissors.addEventListener('mouseout', function() {
    scissors.style.backgroundColor = "#eeeeee";
});

rock.addEventListener('click', function() {
    tie.textContent = "";
    const newListItem = document.createElement('li');
    const listItem = document.createElement('li');
    newListItem.textContent = "Rock";
    listItem.textContent = getComputerChoice(); //changed
    winRound('Rock', listItem.innerText);
    if (checkForTie('Rock', listItem.innerText)) {
        newListItem.textContent = "Rock (TIE!)";
        listItem.textContent = "Rock (TIE!)";
        c_input.textContent = "Rock";
        p_history.append(newListItem);
        c_history.append(listItem);
    } else {
        p_history.append(newListItem);
        c_history.append(listItem);
        c_input.textContent = listItem.innerText;
    }
});

paper.addEventListener('click', function() {
    tie.textContent = "";
    const newListItem = document.createElement('li');
    const listItem = document.createElement('li');
    newListItem.textContent = "Paper";
    listItem.textContent = getComputerChoice();
    winRound('Paper', listItem.innerText);
    if (checkForTie('Paper', listItem.innerText)) {
        newListItem.textContent = "Paper (TIE!)";
        listItem.textContent = "Paper (TIE!)";
        c_input.textContent = "Paper";
        p_history.append(newListItem);
        c_history.append(listItem);
    } else {
        p_history.append(newListItem);
        c_history.append(listItem);
        c_input.innerText = listItem.innerText;
    }
});

scissors.addEventListener('click', function() {
    tie.textContent = "";
    const newListItem = document.createElement('li');
    const listItem = document.createElement('li');
    newListItem.textContent = "Scissors";
    listItem.textContent = getComputerChoice();
    winRound('Scissors', listItem.innerText);
    if (checkForTie('Scissors', listItem.innerText)) {
        newListItem.textContent = "Scissors (TIE!)";
        listItem.textContent = "Scissors (TIE!)";
        c_input.textContent = "Scissors";
        p_history.append(newListItem);
        c_history.append(listItem);
    } else {
        p_history.append(newListItem);
        c_history.append(listItem);
        c_input.innerText = listItem.innerText;
    }
});

