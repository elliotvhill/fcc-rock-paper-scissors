let playerScore = 0
let computerScore = 0
const playerScoreSpanElement = document.getElementById('player-score')
const computerScoreSpanElement = document.getElementById('computer-score')
const roundResultsMsg = document.getElementById('results-msg')

const getRandomComputerResult = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    const i = Math.floor(Math.random() * options.length)
    return options[i]
}

const hasPlayerWonTheRound = (player, computer) => {
    (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Scissors' && computer === 'Paper') ||
        (player === 'Paper' && computer === 'Rock')
}

const getRoundResults = (userOption) => {
    const computerResult = getRandomComputerResult()
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++
        return `Player wins! ${userOption} beats ${computerResult}`
    } else if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`
    } else {
        computerScore++
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

const showResults = (userOption) => {
    roundResultsMsg.innerText = getRoundResults(userOption)
    playerScoreSpanElement.innerText = playerScore
    computerScoreSpanElement.innerText = computerScore
}

showResults('Rock')
