const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [7, 8, 9, 10]


//concatinate a array
const mergeArray1= arr1.concat(arr2)
// console.log(mergeArray1)

const mergeArray2 = [...arr1, "and", ...arr2]
// console.log(mergeArray2)

const multiArr = [1,2,[3,4,[5,6,7]]]
//flat convert multi dimensational array in 1-d array
//flat take depth (how many array) simple hack infinity
const simpleArr = multiArr.flat(Infinity)
// console.log(simpleArr)

console.log(Array.isArray("JavaScript"))
console.log(Array.from("JavaScript"))