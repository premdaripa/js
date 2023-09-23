const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const str = "Hello World!"

for (const char of str) {
    if (char === ' ') {
        continue
    }
    // console.log(char)
}

//map don't allow duplicate value, remember the order of insertion 
const map = new Map();

map.set('a',1);
map.set('b',2);
map.set('c',3);
map.set('d',4);
map.set('b',2);

console.log(map) 

for (const [key, value] of map) {
    console.log(key +':'+ value)
}