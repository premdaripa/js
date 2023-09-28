/**
 * A closure is a concept in JavaScript that allows a function to access and use variables that are defined outside of its own scope. A closure is created when a function 
 * is defined inside another function, and the inner function can access the variables of the outer function, even after the outer function has finished executing. 
 */

//lexical scope
//inner func has access of outer var
function outer() {
    let username = "Avinash"
    function inner() {
        console.log("Username is : "+username)
    }
    inner()
}

// outer()
// console.log(username)

function greet() {
    const msg = 'Welcome here!'
    function display() {
        console.log(msg)
    }
    //return display() with outer function vars because of lexical scopeing
    return display
}


// function greet() {
//     let msg = 'Hello user'
//     return () => console.log(msg)
// }

// const greet = () => {
//     let msg = 'Hello user'
//     return () => console.log(msg)
// }

const greeting = greet()
greeting()

//practical use with onclick beacuse it take a function