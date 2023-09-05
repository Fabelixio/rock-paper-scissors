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

/*const rockbtn = document.querySelector('#rock')
rockbtn.addEventListener('click', playRoundRock)
const paperbtn = document.querySelector('#paper')
paperbtn.addEventListener('click', playRoundPaper)
const scissorbtn = document.querySelector('#scissors')
scissorbtn.addEventListener('click', playRoundScissors)

/*Create html divs that hold scoreboard UI. Link playround to UI scoreboard to
display results. Once score reaches 5, announce winner and reset score. Might have
to create html ui in JS and append to DOM */