const myObj = {
    js : 'Javascript',
    cpp : "C++",
    c : "C",
    rb : "Ruby"
}

for (const key in myObj) {
   console.log(`${key} : ${myObj[key]}`)
}