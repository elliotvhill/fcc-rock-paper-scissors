let playerScore = 0
let computerScore = 0

const getRandomComputerResult = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    const i = Math.floor(Math.random() * options.length)
    return options[i]
}    

const hasPlayerWonTheRound = (player, computer) => {
    if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Scissors' && computer === 'Paper') ||
        (player === 'Paper' && computer === 'Rock')
    ) {
        // playerScore++
        return true
    } else {
        // computerScore++
        return false
    }
}

const getRoundResults = (userOption) => {
    const computerResult = getRandomComputerResult()
    const roundResult = hasPlayerWonTheRound(userOption, computerResult)
    return console.log(`Has player won? ${roundResult}`)
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);