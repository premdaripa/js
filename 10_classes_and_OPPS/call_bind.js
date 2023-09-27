//sitation : we have to validate username at the time of regestation

function validateUsername(userName) {
    this.userName = userName
}

function user(username, email) {
// with this paasing current execution context to another function
    validateUsername.call(this, username)
    this.email = email
}

const userOne = new user('Avinash', 'avinash@abc.com')
console.log(userOne)