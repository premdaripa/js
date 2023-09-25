const userInput = document.querySelector('#guess-number')
const submit = document.getElementById('btn')

const startOver = document.querySelector('.result-para')
const guessSlot = document.querySelector('.guess')
const remainingSlot = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

let randomNumber = Math.floor((Math.random() * 100) + 1)

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1
let playGame = true 


if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        validateGuess(parseInt(userInput.value))
    })
}

const validateGuess = (guess) => {
    if (isNaN(guess) || guess < 1 || guess > 100 ) {
        alert("Invalid input")
    } else {
        prevGuess.push(userInput)
        if (numGuess >= 11) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }

        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
 if (guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame()
 } else if (guess < randomNumber) {
    displayMessage(`Number is too low`)
 } else if (guess > randomNumber) {
    displayMessage(`Number is too high`)
 }

}

function displayGuess(guess) {
    userInput.value = ' '
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remainingSlot.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h4>${message}</h4>`
}

function newGame () {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', () => {
        randomNumber = Math.floor((Math.random() * 100) + 1)
        prevGuess = []
        numGuess = 1 
        guessSlot.innerHTML = ""
        remainingSlot.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled',' ')
        startOver.removeChild(p)
        displayMessage("")
        playGame = true
    })
    
}

function endGame() {
    userInput.value = ' '
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h3 id='newGame'>Start new Game</h3>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}