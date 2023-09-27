class User {
    constructor(username) {
        this.username = username
    }

    logMe () {
        console.log(`User name ${this.username}`);
    }

    //static do not give access to extend class
    static createId () {
        return Math.floor(Math.random() * 100 ) + 1
    }
}

const user = new User('abc')
console.log(user.createId())