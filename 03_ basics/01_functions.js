function greeting (name) {
    console.log(`Hello ${name}`)
}

//greeting -> reference of the function
//calling function
// greeting("avishek")

// function addition (num1, num2) {
//     console.log(num1+num2)
// }

// const add = addition(2,3)

// console.log(add) // undefiend beacuse addtion do not return anything

function addition (num1=0, num2=0) { //deafult paramenter
    return num1 + num2
}

let add = addition(2,3)
// console.log(add) // 5

add = addition()
console.log(add) // 0

//...rest operator will handel rest value
function calclulateCartPrice (num, ...val) {
    //if no value passed then num will undefiend and undefiend = false

    if (!num) { //make the false true for show error
        console.log("Enter a value")
    }

    else {
        console.log(num, val)
    }
}

// calclulateCartPrice() //Error
// calclulateCartPrice(2) // 2 []
// calclulateCartPrice(2,4,5,6) //2 [ 4, 5, 6 ]

const person = {
    name : "Avinash Sigh",
    age: 21,
    Currently_learning : "JS"
}

function handelObject({name, age, Currently_learning:cl}) {
    console.log(`Hello, my name is ${name}, ${age} year old and currently learning ${cl}`)
}

handelObject(person)