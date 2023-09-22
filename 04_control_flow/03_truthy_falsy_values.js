const userEmail = "abc@hmail.com"

if (userEmail) {
    console.log("Got the email")
} else {
    console.log("Email is not present")
}

// falsy values 
// false, 0, -0, 0n (bigint), "" (empty string), null, undefiend, NaN

//truthy
//true, anything not falsy,'0' (zero in str), ' ' (str contain space), [] (empty array), {} (empty obj), function() {} (empty function) 


//empty array check 
/*
const arr = []
if (arr.length === 0) consloe.log("Empty array")
*/


//empty obj check 

/*
const obj = {}

// converting obj keys to array then legth check
if (Object.keys(obj).length === 0) consloe,log("Empty object")
*/

let val;
val = null ?? 3 ?? 10
console.log(val) // 3