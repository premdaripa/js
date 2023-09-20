//converting values

let score = "33"
console.log(typeof score) //string

let newScore = Number(score);
console.log(typeof newScore) //number

let value = "1ab" //string
let newValue = Number(value) //number

console.log("-------------------------")
console.log(typeof newValue) //number
console.log(newValue) //NaN (Not a number)

/*
"33" => 33
"12a" => NaN
undefiend => NaN
null => 0
true => 1
false => 0
* */