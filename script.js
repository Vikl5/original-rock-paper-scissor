
const winCondition = {
    "scissor": "paper", //Scissor beats paper
    "paper": "rock", //Paper beats rock
    "rock": "scissor" //Rock beats scissor
}
const play = ["rock", "paper", "scissor"]
const getComputerChoice = (choice) => choice[Math.floor(Math.random()*choice.length)]
const results = document.querySelector("#results")
const counter = document.querySelector("#counter")
const container = document.querySelector("#container")
let playerResult = 0
let computerResult = 0
let countRound = 0
function playGame(playerSelect, computerSelect) {
    results.textContent = `Round ${countRound + 1}: `;
    if (playerSelect === computerSelect) {
        results.textContent += `You chose: ${playerSelect} and the computer chose:
        ${computerSelect}`
    }
    else if (winCondition[playerSelect] === computerSelect) {
        playerResult++;
        document.querySelector("#playerScore").textContent = playerResult
        results.textContent += `You chose: ${playerSelect} and the computer chose:
        ${computerSelect}`
    }
    else {
        computerResult++;
        document.querySelector("#computerScore").textContent = computerResult
        results.textContent += `You chose: ${playerSelect} and the computer chose:
        ${computerSelect}`
    }
    countRound++;
}


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
let rounds = 0
rockButton.addEventListener("click", () => {
    const compSelect = getComputerChoice(play);
    const playRock = "rock";
    playGame(playRock, compSelect);
    rounds += 1
    isGameDone();
});

paperButton.addEventListener("click", () => {
    const compSelect = getComputerChoice(play);
    const playPaper = "paper";
    playGame(playPaper, compSelect);
    rounds += 1
    isGameDone();
});

scissorButton.addEventListener("click", () => {
    const compSelect = getComputerChoice(play);
    const playScissor = "scissor";
    playGame(playScissor, compSelect);
    rounds += 1
    isGameDone();
});


function isGameDone() {
    if (rounds === 5) {
        getResult();
        container.classList.add("inactive")
        setTimeout(getResult, 2000);
    }
    else return;
}


function getResult() {
    if (playerResult === computerResult) {
        results.textContent = "It's a tie! You had a score of " + playerResult + " and the computer had a score of " + computerResult;
    }
    else if (playerResult < computerResult) {
        results.textContent = "The computer wins! You had a score of " + playerResult + " and the computer had a score of " + computerResult;
    }
    else {
        results.textContent = "You win! You had a score of " + playerResult + " and the computer had a score of " + computerResult;
    
    }
}
