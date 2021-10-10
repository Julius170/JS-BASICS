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




// HOISTING = IS THE PROCESS OF MOVING FUNCTION DECLARATIONS
// TO THE TOP OF THE FILE
// FOR  FUNCTON DECLARATION 

stop();

function  stop() {
    console.log('stop');
};
// BUT IS NOT APPLICABLE TO FUNCTION EXPRESSION 
// spec();

// let spec = function() {
//     console.log(specs);
// }


// ARGUMENTS

function sum() {
    let total = 0;
    for ( let value of arguments) // REPRESENTS ALL THE POSSIBLE ARGUMENTS PASSED INTO THE FUNCTION 
        total += value;
    return total; 
    console.log(arguments); // RETURNS THE ARGUMENETS OF THE FUNCTION AS AN OBJECT
    return a + b; 
}

console.log(sum(2)); // NUMBER + UNDEFINED = NaN
console.log(sum(1, 2, 3, 4, 5));  // ONLY THE  FIRST 2 ARGUMENTS ARE USED



// THE REST OPERATION (...)
// THEY TAKE ALL THE  AALL THE ARGUMENTS 
function newSum(...args) { 
    console.log(args);
    return args.reduce((a,b) => a + b);
}

console.log(newSum(1, 2, 3, 4, 5));

