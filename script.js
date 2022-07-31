

const winCondition = {
    "scissor": "paper", //Scissor beats paper
    "paper": "rock", //Paper beats rock
    "rock": "scissor" //Rock beats scissor
}
const play = ["rock", "paper", "scissor"]
const getComputerChoice = (choice) => choice[Math.floor(Math.random()*choice.length)]

// function getComputerChoice(choice) {
//     let random = choice[Math.floor(Math.random()*choice.length)]
//     console.log(random)
// }


function playGame(playerSelect, computerSelect) {
    if (playerSelect === computerSelect) {
        console.log("You chose:", playerSelect, "and the computer chose:",
        computerSelect)
        return "The result is a tie!";
    }
    else if (winCondition[playerSelect] === computerSelect) {
        console.log("You chose:", playerSelect, "and the computer chose:",
        computerSelect)
        return "You win!";
    }
    else {
        console.log("You chose:", playerSelect, "and the computer chose:",
        computerSelect)
        return "Computer wins!";//"Computer wins")
    }
}


const playSelect = prompt("Make your choice")
const compSelect = getComputerChoice(play)
//console.log(playGame(playSelect, compSelect))

function game() {
    playGame(playSelect, compSelect)
}