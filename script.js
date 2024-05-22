const getRandomComputerResult = () => {
    const options = ['Rock', 'Paper', 'Scissors']
    let i = Math.floor(Math.random() * 2)
    return options[i]
}

console.log(getRandomComputerResult())

const hasPlayerWonTheRound = (player, computer) => {
    if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Scissors' && computer === 'Paper') ||
        (player === 'Paper' && computer === 'Rock')
    ) {
        return true
    } else {
        return false
    }
}

console.log(hasPlayerWonTheRound('Rock', 'Scissors'))
console.log(hasPlayerWonTheRound('Scissors', 'Rock'))
