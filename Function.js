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

// WHEN YOU APPLY A REST IN THE PARAMETER OF A FUNCTION
// IT TAKES  ALL THE ARGUMENTS PASSED IN AND RETURN THEM ADS AN ARRAY
// THEY MUST ALWAYS BE PAASSED AS THE LAST PARAMETER 

function newSum(...args) { 
    console.log(args);
    return args.reduce((a,b) => a + b);
}

console.log(newSum(1, 2, 3, 4, 5));

function newSum(discount,...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount)
}

console.log(newSum(0.1, 20, 30));

// DEFUALT PARAMETERS

function interest (principal, rate = 3.5, year = 5) {
    // rate = rate || 3.5;
    // year = year || 5;


    return principal * rate / 100 * year;
}

console.log(interest(10000));


// GETTERS AND SETTERS

const person = {
    firstName: "Phensic",
    lastName: 'Mayowa',
    get fullName() {        // USING THE GETTER
        return `${person.firstName} ${person.lastName}`
    },
    set fullName (value) {
        if (typeof value !== 'string')return;
        // throw new Error('Value is not a sting');

        const parts = value.split(' ');
        if (parts.length !==2 )
        // throw new Error ('Enter a first and last  name.')
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
};
// GETTERS ARE USED TO ACCESS THE PROPERTIES IN AN OBJECT
// SETTERS ARE USED TO CHANGE (MUTATE) THE PREOPERTIES OF AN OBJECT

// console.log(person.fullName());   => CALLING THE FUNCTION
    
console.log(person.fullName);   //=> CALLING THE KEY PAIR USING GET
console.log(person);




// TRY AND CATCH
// try {
//     person.fullName = '';
// }
// catch (e) {
//     console.log(e);
//     alert(e);
// }



// LOCAL vs GLOBAL SCOPE
// A SCOPE OF A VARIABLE OR CONSTANT DETERMINES WHERE THE VARIABLE OR CONSTANT IS ACCESSIBLE

const coloring = 'red'; //GLOBAL SCOPE => CAN BE ACCESSIBLE GLOBALLY (EVERYWHERE)

function starting() {
const message = 'Hi'; 
const coloring = 'blue';
console.log(coloring);  //LOCAL SCOPE => IS ONLY ACCESSIBLE LOCALLY (IN THE START FUNCTION)
}

function stoping() {
    const message = 'bye';   // LOCAL SCOPE
}

starting();

// LOCAL VARIABLES AALWAYS TAKE PRESEDENCE OVER GLOBAL VARIABLES




// LET vs VAR
// \WHEN DEFINING A VARIALBLE WITH VAR, ITS SCOPE IS NOT LIMITED TO THE BAR ITS DEFINED IN
// BUT IS LIMITED TO THE FUNCTION ITS DEFINED IN
// VAR => FUNCTION SCOPE VARIABLES
// ES6 (ES2015): LET & CONST =>   BLOCKED-SCOPED


function start() {
    for (let i = 0; i < 5; i++) {
        if (true) {
            var color = 'red'
        }
    }
    console.log(color);
    // console.log(i);
}

start();



var color = 'red'
let age = 30;




function sayHi() {
    console.log('Hi');
}





// THE "THIS" KEYWORD => IT REFERENCES THE OBJECT THAT IS EXECUTING THE CURRENT FUNCTION
// METHOD => OBJECT
// FUNCTION => GLOBAL(WINDOW, GLOBAL)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);
        },this.title);
    },
    play() {
        console.log(this);
    }
};
video.showTags();
// video.stop = function () {
//     console.log(this);
// } ;

function Video(title) { 
this.title = title;
    console.log(this);
}
const v = new Video('c');



// CHANGING THE VALUE OF THIS

function playVideo(a, b) {
    console.log(this);
}


playVideo.call({ name: 'Mayor'},1, 2);
playVideo.apply({ name: 'Mayor'}, [1, 2]);
playVideo.bind({ name: 'Mayor' })();

playVideo();


// EXERSICE 1

console.log(sum([1,2,3,4]));

function sum(...items) {
    
return items.reduce((a, b) => a + b);
}




// EXERSICE



