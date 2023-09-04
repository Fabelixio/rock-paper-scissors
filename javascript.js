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
let computerSelection = getComputerChoice()
function playRoundRock(computerSelection) {
    if(computerSelection === 'rock') {
        t++
        return 'Computer: rock! It\'s a tie!'
    } else if(computerSelection == 'paper') {
        l++
        return 'Computer: paper! You lose!'
    } else if(computerSelection == 'scissors') {
        w++
        return 'Computer: scissors! You win!'
    }
}

function playRoundScissors(computerSelection) {
    if(computerSelection === 'scissors') {
    t++
    return 'Computer: scissors! It\'s a tie!'
    } else if(computerSelection == 'rock') {
    l++
    return 'Computer: rock! You lose!'
    } else if(computerSelection == 'paper') {
    w++
    return 'Computer: paper! You win!'
    }
}

function playRoundPaper(computerSelection) {
    if(computerSelection === 'paper') {
        t++
        return 'Computer: paper! It\'s a tie!'
    } else if(computerSelection == 'scissors') {
        l++
        return 'Computer: scissors! You lose!'
    } else if(computerSelection == 'rock') {
        w++
        return 'Computer: rock! You win!'
    }
}




//dom ui
const rockbtn = document.querySelector('#rock')
rockbtn.addEventListener('click', playRoundRock)
const paperbtn = document.querySelector('#paper')
paperbtn.addEventListener('click', playRoundPaper)
const scissorbtn = document.querySelector('#scissors')
scissorbtn.addEventListener('click', playRoundScissors)

/*Create html divs that hold scoreboard UI. Link playround to UI scoreboard to
display results. Once score reaches 5, announce winner and reset score. Might have
to create html ui in JS and append to DOM */