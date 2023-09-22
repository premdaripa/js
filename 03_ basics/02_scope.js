

if (true) {
    // block scope 
    let a = 10;
    const b = 20;
    // global scope
    var c = 30;
}

// console.log(a) //error scope available only in if
// console.log(b) //error scope available only in if
// console.log(c) // 30 (Global Scope)

//inner function can access the var of outer/parent function its called clouser
// function one() {
//     const userName = "Ravi"
//     function two () {
//         const website = "Google.com"
//         console.log(userName)
//         console.log(website)
//     }
//     two()
// }

// one()


// ------------------------------------------------

//add(2,2) not possible because of hoisting
const add = function(num1=0,num2=0) {
    return num1 + num2
}

console.log(add(2,2))