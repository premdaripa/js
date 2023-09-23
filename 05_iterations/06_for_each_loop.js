const arr = [1,2,3,4,5]

arr.forEach(ele => {
    // console.log(ele)
});


arr.forEach( (ele, index, arr) => {
    // console.log(ele, index, arr)
})


const myCodeing = [
    {
        languageName : 'Javascript',
        languageFile : 'Js'
    },
    {
        languageName : 'Java',
        languageFile : 'java'
    },
    {
        languageName : 'Python',
        languageFile : 'py'
    },

]

myCodeing.forEach( (item) => {
    console.log(item.languageName)
})