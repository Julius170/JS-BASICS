console.log('My name is Phensic');



// FUNCTION DECLARATIONS vs EXPRESSION 


// FUNCTION DECLARATION 
function walk () {
    console.log('walk');
}

// NAMED / ANONYMOUS  FUNCTION EXPRESSION

let run = function  () {
    console.log(run);
};
let move = run 
run();
move();


// HOISTING =. IS THE PROCESS OF MOVING FUNCTION DECLARATIONS 
// TO THE TOP OF THE FILE
// FOR  FUNCTON DECLARATION 
stop();

function  stop() {
    console.log('stop');
};
// BUT IS NOT APPLICABKE TO FUNCTION EXPRESSION 


// ARGUMENTS

function sum(a, b) {
    return a + b;
} 






