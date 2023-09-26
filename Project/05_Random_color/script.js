const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i= 0; i<= 5; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId;

const startChangeingColour = () => {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor () {
        document.body.style.backgroundColor = randomColor()
  
    }

}

const stopChangeingColor = () => {
    clearInterval(intervalId)
    intervalId = null

}


start.addEventListener('click',startChangeingColour)
stop.addEventListener('click',stopChangeingColor)