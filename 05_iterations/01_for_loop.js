
// print value from 2 - 8
// for (let i = 0; i <= 10; i++) {
//     if (i < 2) {
//         continue
//     } else if (i === 9) {
//         break
//     }
//     else {
//         console.log(i)
//     }
// }


//print 9 table in arr 

const arr = []
let num = 9
for (let i = 1; i <= 10; i++) {
    arr.push(`${num} * ${i} = ${num*i}`);
}

console.log(arr)
