// ----------------- Object Litrals -----------------

/*
let obj = {
    userName : 'Avinash',
    email : 'Avinash@abc.com',
    print : function() {
        //we should use this else function gives error beacuse it don't know the value of email
        //this refer to current obj
        console.log(`Email is : ${this.email}`)
    }
}

obj.print()
*/

// ------------------- constructor function --------------------------

// function User(userName,email) {
//     this.userName = userName,
//     this.email = email,
//     this.greeting = function () {
//         console.log(`Welcome ${this.userName}`)
//     }

//     //no problem if not declare this
//     return this;
// }
/**
 * ---------------------- new keyword --------------
 * step 1 : new create a new instance or a empty obj
 * step 2 : constructor funcation called and the argument passed
 * step 3 : now values assigned to current obj then return this
 */
// const userOne = new User('Avinash','abc@xyz')
// const userTwo = new User('Rabi','abc@xyz')

// console.log(userOne)
// console.log(userTwo)

// //check the instace of
// console.log(userOne instanceof User)

// ------------------------------------ impotance of this and new ---------------------

function prodctDetails(productName, productPrice) {
  this.productName = productName;
  this.productPrice = productPrice;
}

//this refer to current obj product price
prodctDetails.prototype.increasePrice = function () {
  this.productPrice++;
};

prodctDetails.prototype.newPrice = function () {
  console.log(`New product price is ${this.productPrice}`);
};

//new created obj from contuctor function and gives prototype with new functions
const pasta = new prodctDetails("Pasta", "120");
const cake = new prodctDetails("Cake", "320");

pasta.newPrice();
cake.increasePrice();
cake.newPrice();

/**
 * Here's what happens behind the scenes when the new keyword is used:

 * A new object is created: The new keyword initiates the creation of a new JavaScript object.

 * A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined  on the constructor's prototype.

 * The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

 * The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
 */
