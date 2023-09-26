/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Inside settimeout")
        resolve({name: "xyx", email: "abc@abc.com"})
    },2000)
})

promise.then((user) => {
    console.log("Inside then")
    console.log(user)
})
*/

/*
const newPromise = new Promise((resolve, reject) => {
    setTimeout( () => {
        let err = true
        if (!err) {
            resolve({name:"Mr. abc",email : "abc@df.com"})
        } else {
            reject("ERROR caught")
        }
    })
})

newPromise.then((user) => {
    return user.name
}).then((username) => {
    console.log(username)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('the promise is either reslove or rejectd')
})
*/

// promises handel with async await
/*
const asyncPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true
        if (!err) {
            resolve({name:"Mr. abc",email : "abc@df.com"})
        } else {
            reject("ERROR caught")
        }
    },1000)
})


async function consumeAsyncPromise() {
   try {
    const response = await asyncPromise
   console.log(response)        
   } catch (error) {
       console.log(error)
    }
}

consumeAsyncPromise()
*/

// async function fetchData() {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log("Error" + e));
 