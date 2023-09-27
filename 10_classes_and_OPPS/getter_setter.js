//by default getter and setter creater for each property
//_property == private 
class User {
    constructor(username,email,password) {
        this.username =username
        this.email = email
        this.password = password
    }

    set password(value) {
       this._password = value 
    }

    get password() {
        return `${this._password}+*/*`
    }
}

const usr = new User('Avinash','avinash@gamil.com','abc')
console.log(usr)
console.log(usr.password)
