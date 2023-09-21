// let date = new Date();
// console.log(date.toDateString())
// console.log("---------------")
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toTimeString());

let timeStamp = Date.now()
let newDate = new Date("09-21-2023")

// console.log(timeStamp)
console.log(Math.floor(Date.now() / 1000)) //ms > sec
console.log(newDate.getTime())

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))

console.log(newDate.getFullYear())