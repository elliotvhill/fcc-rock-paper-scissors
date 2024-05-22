const getRandomComputerResult = () => {
    const options = ["Rock", "Paper", "Scissors"]
    let i = Math.floor(Math.random())
    return options[i]
}

console.log(getRandomComputerResult())