let choice;
let t = 0
let w = 0
let l = 0
let invalid = 0
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
        return 'Computer: paper! You lose!'
    } else if(choice.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        l++
        return 'Computer: scissors! You lose!'
    } else if(choice.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        l++
        return 'Computer: rock! You lose!'
    } else if(choice.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        w++
        return 'Computer: scissors! You win!'
    } else if(choice.toLowerCase() == 'paper' && computerSelection == 'rock') {
        w++
        return 'Computer: rock! You win!'
    } else if(choice.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        w++
        return 'Computer: paper! You win!'
    } else {
        invalid++
        return 'Please choose rock paper or scissors!'
    }
}

function game() {
for (let i = 1; i < 4; i++) {
    choice = prompt(`Choose Rock, Paper or Scissors:`)
    alert(`You: `+ choice[0].toUpperCase() + choice.substring(1) + `!\r` + playRound())
    alert(`Game: ` + i + `/3\r` + `Score:\rYou: ` + w +`\rCPU: ` + l + `\rTies: ` + t)
    if(invalid == 1) {
        i--
        invalid--
    }
}
}
game()