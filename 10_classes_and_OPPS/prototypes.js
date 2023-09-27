//prototypal behaviour is a default behaviour

// function multiply(num) {
//     return num * 5
// }

// //access function as obj
// multiply.power = 2

// console.log(multiply(5)) // 25
// console.log(multiply.power) // 2
// console.log(multiply.prototype) // {}

// ---------------------------------------------------------------------

// object is golabl 
// string, function, array 
let myHeros = ['Spiderman', 'Superman']

let heroPower = {
    Spiderman : "sling",
    superman : "strength"
}

Object.prototype.greet = function () {
    console.log(`i'm a prototype function from obj`)
}

Array.prototype.arrayGreet = function () {
    console.log("prototype function from array")
}

//object func so acces by any data type (string, function, obj)
myHeros.greet()
heroPower.greet()

//this func only acces by array
myHeros.arrayGreet()