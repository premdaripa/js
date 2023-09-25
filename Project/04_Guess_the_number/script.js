const input = document.querySelector('#user-input')
const submit = document.querySelector('#submit')

const resultSection = document.querySelector('.result-section')
const guessList = document.querySelector('.guess-list')
const chances = document.querySelector('.chances')
const highOrLow = document.querySelector('.highOrLow')

const p = document.createElement('p')

let remainingChances = 1
let guess = []

//genrateing random number
let randomNumber = Math.floor((Math.random() * 100)+1)

//adding eventlistner 
submit.addEventListener('click',(e) => {
    e.preventDefault()
    inputValidate(parseInt(input.value))
})


//validateing the input
const inputValidate = (input) => {
    if (input < 1 || input > 100 || isNaN(input)) {
        alert("Invalid input")
    } else {
        if (remainingChances === 10 && input !== randomNumber) {
            displayMessage(`Better luck next time. Random Number Was ${randomNumber}`)
            endGame()
        } else {
            guess.push(input)
            inputCheckWithRandom(input)
        }
    }
}

//check the input match with random number
const inputCheckWithRandom = (input) => {
    if (input === randomNumber) {
        displayMessage('You guessed it right')
        /endGame()
    } else if (input < randomNumber) {
        displayMessage('Guessed number is too low')
        updateGuesslist(input)
        remainingChances++
    } else {
        displayMessage('Guessed number is too high')
        updateGuesslist(input)
        remainingChances++
    }
}

// guesslit and update remaining count function
const updateGuesslist = (number) => {
    guessList.innerHTML += `${number} `
    chances.innerHTML = `${10 - remainingChances}`
    input.value = ' '
}

// display message function 
const displayMessage = (message) => {
    highOrLow.innerHTML = `<h3>${message}</h3>`
}

const endGame = () => {
    input.setAttribute('disabled','')
    p.innerHTML = '<h3 class="startNewGame">Start New Game</h3>'
    resultSection.appendChild(p)
    startGame()
}

//seeting everything to intial stage
const startGame = () => {
    const newGame = document.querySelector('.startNewGame')
    newGame.addEventListener('click', () => {
        randomNumber = Math.floor((Math.random() * 100)+1)
        input.value = " "
        remainingChances = 1
        guessList.innerHTML = " "
        chances.innerHTML = "10"
        displayMessage("")
        input.removeAttribute('disabled', '')
        resultSection.removeChild(p)
    })
}