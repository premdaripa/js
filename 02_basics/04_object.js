const tinderUser = new Object(); //singleton obj

tinderUser.name = "Avinash Singh";
tinderUser.address = {
  streetname: "84/1 mg road",
  pincode: 700001,
};

// console.log(tinderUser)

//accessing nested obj
// console.log(tinderUser.address.streetname)

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 2: "c", 3: "d" };
const obj3 = { 4: "e", 5: "f" };

// object.assign(target, assign)
// const obj = Object.assign({}, obj1, obj2, obj3);

const obj = {...obj1, ...obj2}

console.log(obj)

const person = {
    name : "Avinash Sigh",
    age: 21,
    Currently_learning : "JS"
}

const {name, age, Currently_learning:cl} = person

console.log([name, age, cl])