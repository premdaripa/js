//singleton
// object.create



//object literals

//createing a symbol
const mySym = Symbol("Key")
const jsUser = {
    name : "Avijit",
    "full name" : "Avijit Sen",
    [mySym] : "symbol as key",
    age : 21,
    ph_no : 123456789,
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
}

// console.log(jsUser) //view object details here you see symbol key

//accessing obj keys
console.log(jsUser.name)
console.log(jsUser["full name"]) //it should be accessed in this way
console.log(jsUser[mySym]) //access symbol key

// Object.freeze(jsUser); //object cann't modify now

//adding a function to obj
jsUser.greeting = function () {
    console.log(`Hello Mr.${this.name}`)
}
console.log(jsUser.greeting())