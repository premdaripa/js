const form = document.querySelector('form')
// this usecase will give you empty vlue
// const height = parseInt(document.querySelector('#height'))
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if (height === ' ' || height < 0 || isNaN(height)) {
        result.innerHTML = "Invalid height"
        result.style.color = 'red'
    }

    else if (weight === ' ' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Invalid weight"
        result.style.color = 'red'
    } else {
       const bmi = (weight / ((height * height)/10000)).toFixed(2)
       result.innerHTML = bmi
       result.style.color = 'green'
       result.style.fontSize = '2rem'
    }
})