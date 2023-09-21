// const score = 400
// console.log(score)
// const balance = new Number(100) //spacily defiend its a number object
// console.log(balance) 

// console.log(balance.toString().length) //3

// const newBalance = new Number(125.635)
// console.log(newBalance.toFixed(2)) //125.45

// //toPrecision returns a string value
// console.log(newBalance.toPrecision(3)) //126
// console.log(newBalance.toPrecision(4)) //125.6

// const hundreds = 1000000
// console.log(hundreds.toLocaleString()) //10,00,000

// ---------------------------- Maths ---------------------------------------

console.log(Math.abs(-4)) //4
console.log(Math.round(1.8)) //2
console.log(Math.ceil(1.4)) //2
console.log(Math.floor(1.8)) //1

//Math.random gives a random value between 0 and 1

//+1 used to avoid 0
console.log(Math.floor((Math.random() * 10 )+ 1)) //random value with in 10 

//random number between 10 to 20
const max = 20;
const min = 10;
console.log(Math.floor((Math.random() * (max - min + 1)) + min))