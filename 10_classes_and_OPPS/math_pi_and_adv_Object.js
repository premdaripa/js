//Cahnge Math.PI value
//value cann't change beacuse it hard coded in js engine

// let dec = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(dec)

const product = {
    name : "Pasta",
    price : 250,
    isAvailable : true
}

let dec1 = Object.getOwnPropertyDescriptor(product,'price')
console.log(dec1)
Object.defineProperty(product, 'price', {
    writable : false,
    enumerable :false
})

dec1 = Object.getOwnPropertyDescriptor(product,'price')
console.log(dec1)