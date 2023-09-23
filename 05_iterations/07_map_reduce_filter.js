// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filterNums = myNums.filter( (num) => num > 4 )

// console.log(filterNums)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter( (bk) => (
//       bk.publish >= 2000 && bk.genre === 'Science'
// ))

// console.log(userBooks)

// ---------------- map ------------------------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map ( (num) => (
//   num*2
// ))

// // console.log(myNums)
// console.log(newNums)

// --------------- reduce -----------------------

const myNums = [1, 2, 3, 4];

const total = myNums.reduce((acc, curVal) => {
  console.log(`acc : ${acc} and curVal : ${curVal}`);
  return acc + curVal;
}, 0);

console.log(total);



const shopingCart = [
  {
    itemName : "Jeans",
    price : 1099
  },
  {
    itemName : "Trousers",
    price : 899
  },
  {
    itemName : "Shirt",
    price : 999
  },
  {
    itemName : "T-Shit",
    price : 499
  }
]

const totalPrice = shopingCart.reduce( (acc, item) => ( acc + item.price),0)
console.log(totalPrice)