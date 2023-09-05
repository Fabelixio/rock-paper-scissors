let choice;
let w = 0
let l = 0
const buttons = document.querySelectorAll('input')
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
function endGame () {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let result = ''
    let computerSelection = getComputerChoice()

    if(playerSelection === computerSelection) {
        result = ('Computer: ' + playerSelection + '! It\'s a tie!' + '<br>Player Score: '
        + w + '<br>Computer Score: ' + l)

    } else if((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        w++
        result = ('Computer: ' + computerSelection + '! You Win!' + '<br>Player Score: '
        + w + '<br>Computer Score: ' + l)
        
        if (w == 5) {
            result += '<br><br>Victory is yours! Reload the page to play again.'
            endGame()
        }

    } else {
        l++
        result = ('Computer: ' + computerSelection + '! You Lose!' + '<br>Player Score: '
        + w + '<br>Computer Score: ' + l)

        if(l == 5) {
            result += '<br><br>Computer wins the Game! Better luck next time! Reload the page to try again.'
            endGame()
        }
    }

    document.getElementById('scoreBoard').innerHTML = result
    return
}

//dom ui

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})