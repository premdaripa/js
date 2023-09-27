// inheritance

// const User = {
//     name: "xyz",
//     email: "xyz@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// //old syntax
// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

// inhertence with class

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    teacherlog() {
        console.log(`Welcome ${this.username}, you're now teacher`)
    }
}

const teacher = new Teacher('Rabi','abc@gmail.com','abc123')
console.log(teacher)