let playerScore = 0
let computerScore = 0
const playerScoreSpanElement = document.getElementById('player-score')
const computerScoreSpanElement = document.getElementById('computer-score')
const roundResultsMsg = document.getElementById('results-msg')
const winnerMsgElement = document.getElementById("winner-msg")
const optionsContainer = document.querySelector(".options-container")
const resetGameBtn = document.getElementById("reset-game-btn")

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
    if (playerScore === "3") {
        winnerMsgElement.innerText = `Player has won the game!`
        resetGameBtn.style.display = 'block'
        optionsContainer.style.display = 'none'
    } else {
        winnerMsgElement.innerText = `Computer has won the game!`
        resetGameBtn.style.display = 'block'
        optionsContainer.style.display = 'none'
    }
}

const resetGame = () => {
    playerScore = 0
    computerScore = 0
    playerScoreSpanElement.innerText = "0"
    computerScoreSpanElement.innerText = "0"
    resetGameBtn.style.display = 'none'
    optionsContainer.style.display = 'block'
    roundResultsMsg.innerText = ""
    winnerMsgElement.innerText = ""
}

resetGameBtn.addEventListener("click", resetGame)

const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

rockBtn.addEventListener("click", showResults("Rock"))
paperBtn.addEventListener("click", showResults("Paper"))
scissorsBtn.addEventListener("click", showResults("Scissors"))