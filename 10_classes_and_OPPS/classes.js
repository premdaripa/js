//ES6 (classes intro)

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email
        this.password = password
    }

    encryptPassword () {
        return `${this.password}+abc`
    }
}

const userOne = new User("Avinash", "avinash@xyz","123")
console.log(userOne)
console.log(userOne.encryptPassword())

//get same result with constructor function
// behiend sence

function Usr(username, email, password) {
    this.username = username;
        this.email = email
        this.password = password
}

Usr.prototype.encryptPassword = function () {
    return `${this.password}+abc`
}

const userBehiendSence = new Usr('Avishek','abc@gmail.com','hello1234')
console.log(userBehiendSence)
console.log(userBehiendSence.encryptPassword())