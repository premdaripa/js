const myArr = [0, 1, 2, 3, 4, 5]
console.log(`Value of ${myArr}`)

const arr = new Array(1, 2, 3, 4, 5, 6)

// console.log(arr[0]) //1

//array methods
arr.push(7) //[1, 2, 3, 4, 5, 6, 7]
arr.pop() //[1, 2, 3, 4, 5, 6]

//avoid its a slow operation because whole elements of array are shifted
arr.unshift(9) // add 9 at 0th index

arr.shift() // remove first element from array

// const newArr = myArr.join() // convert arry to string 

// console.log(newArr)

// slice vs splice (****)
const sliceArr = myArr.slice(1,3)
console.log(sliceArr)
console.log(`Value of arr after slice() : ${myArr}`)

const spliceArr = myArr.splice(1,3)
console.log(spliceArr)
console.log(`Value of arr after splice() : ${myArr}`)