const name="Abhinash"

console.log(`My name is ${name}`)


//string is a object here
let str = new String("Hey i'm String");
console.log(str[0]) //accessing the value at 0th key

console.log(name.toUpperCase()) //ABHINASH
console.log(name.length) //8
console.log(name.charAt(2)) //h
console.log(name.indexOf('i')) //3

console.log(str.substring(0,7)) //Hey i'm

console.log(str.slice(-10,-6)) //i'm