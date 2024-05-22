const getRandomComputerResult = () => {
    const options = ["Rock", "Paper", "Scissors"]
    let i = Math.floor(Math.random() * 2)
    return options[i]
}

console.log(getRandomComputerResult())

const hasPlayerWonTheRound = (player, computer) => {

}

// console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
// console.log(hasPlayerWonTheRound("Scissors", "Rock")); 