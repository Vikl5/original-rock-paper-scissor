
const winCondition = {
    "scissor": "paper", //Scissor beats paper
    "paper": "rock", //Paper beats rock
    "rock": "scissor" //Rock beats scissor
}
const play = ["rock", "paper", "scissor"]
const getComputerChoice = (choice) => choice[Math.floor(Math.random()*choice.length)]


let playerResult = 0
let computerResult = 0
function playGame(playerSelect, computerSelect) {
    if (playerSelect === computerSelect) {
        console.log("You chose:", playerSelect, "and the computer chose:",
        computerSelect)
    }
    else if (winCondition[playerSelect] === computerSelect) {
        console.log("You chose:", playerSelect, "and the computer chose:",
        computerSelect)
        return playerResult += 1
    }
    else {
        console.log("You chose:", playerSelect, "and the computer chose:",
        computerSelect)
        return computerResult += 1
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playSelect = prompt("Make your choice")
        const compSelect = getComputerChoice(play)
        playGame(playSelect, compSelect)
    }
}
game()

function result() {
    if (playerResult === computerResult) {
        console.log("It's a tie")
    }
    else if (playerResult < computerResult) {
        console.log("Computer wins")
    }
    else {
        console.log("You win")
    }
}
result()