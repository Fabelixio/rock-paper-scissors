let choice;
let t = 0
let w = 0
let l = 0
function getComputerChoice() {
var compChoice = Math.floor(Math.random()*100)
console.log(compChoice)
if(compChoice <= 33) {
    return 'rock'
} else if(compChoice >= 66) {
    return 'paper'
} else {
    return 'scissors'
}
}

function playRound() {
    let computerSelection = getComputerChoice()
    if(choice.toLowerCase() == 'rock' && computerSelection == 'rock') {
        t++
        return 'Computer: rock! It\'s a tie!'
    } else if(choice.toLowerCase() == 'paper' && computerSelection == 'paper') {
        t++
        return 'Computer: paper! It\'s a tie!'
    } else if(choice.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        t++
        return 'Computer: scissors! It\'s a tie!'
    } else if(choice.toLowerCase() == 'rock' && computerSelection == 'paper') {
        l++
    }
}