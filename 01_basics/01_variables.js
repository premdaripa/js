console.log("Hello World! Let's start learing")

const accountId = 1442345
let accountEmail = "coustomer@gmail.com"
var accountCity = "Kolkata"

console.log("Values : "+[accountId, accountEmail, accountCity])
console.log("-------")

//values of const cannot changed
// accountId=123456
accountEmail="abc@gmail.com"
accountCity= "Durgapur"
console.log("Values after modify")
console.table([accountId, accountEmail, accountCity])