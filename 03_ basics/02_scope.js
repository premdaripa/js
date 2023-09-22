

if (true) {
    // block scope 
    let a = 10;
    const b = 20;
    // global scope
    var c = 30;
}

// console.log(a) //error scope available only in if
// console.log(b) //error scope available only in if
console.log(c) // 30 (Global Scope)
