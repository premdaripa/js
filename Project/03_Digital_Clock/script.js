const clock = document.querySelector('.clock')

//run a function after a specific time
setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)