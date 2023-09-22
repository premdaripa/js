//Immediately Invoked Function Expressions (IIFE)

//named IIFE 
(
    function fun () {
        console.log("DB Connected");
    }
)();

//Normal IIFE
(
    (num) => {
        console.log(`${num}`)
    }
)(2);

