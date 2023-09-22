const user = {
    username : "Abhinash",
    price : 999,
    welcomeMessage : function () {
        console.log(`Welcome, ${this.username}`)
    }
}

user.welcomeMessage()

//explecit return
const func = (num1, num2) => {
    console.log(num1+num2)
}

func()

//implicit return
const add = (num1, num2) => num1 + num2 