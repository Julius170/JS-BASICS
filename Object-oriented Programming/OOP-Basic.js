// WHAT IS OOP
// A PROGRMMING PARADIGM(STYLE) CEBTERED AROUND OBJECTS RATHER THAT FUNCTIONS


// 4 PILLARS OF OBJECT-ORIENTED PROGRAMMING
// ENCAPSULATION:
//  GROUPING RELATED VARIABLES AND FUNCTIONS THAT OPERATE ON THEM INTO OBJECTS
// => REDUCE COMPLEXITY + INCREASE REUSABILITY


// ABSTRACTION:
// HIDING ALL COMPLEXITY ON THE OBJECT INSIDE AND MAKING THE INTERFACE OF THE OBJECTS SIMPLER
// AND REDUCES THE IMPACT OF CHANGE
// => REDUCES COMPLEXITY + ISOLATES IMPACT OF CHANGE


// INHERITANCE:
// ALLOWS FOR ELIMINATING REDUNDANT CODING
// =>ELIMINATES REDUNDANT CODE


// POLYMORPHISM = MANY FORM:
// A TECHNIQUE THAT ALLOWS YOU TO GET RID OF LONG IF...ELSE, SWITCH...CASE STATEMENTS 
// =>REFACTOR UGLY SWIRCH/CASE STATEMENTS
// VARIALBLES = PROPERTIES
// FUNCTIONS = METHODS


console.log("Hello World!");

// OBJECTS
// OBJECT LITERALS


// FACTORY FUNCTION
function createCircle(radius) {
    return{
        radius,
       draw: function() {
           console.log('draw');
       }
    };
}
let circle = createCircle(10);
circle.draw();


// CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
    console.log('draw');
    }
}
// FUNCTIONS ARE OBJECTS

const Circle1 = new Function('radius',`
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }`
    );

const another = new Circle(1);


Circle.call({}, 1);
Circle.apply({}, [1, 2, 3, 4]);
 
// CONSTRUCTOR PROPERTY: e.g(another.constructor)
// EVERY OBJECT HAS A CONSTRUCTOR PROPERTY THAT REFERENCES THE 
// FUNCTION THAT WAS USED TO CREATE THE OBJECT 



// VALUE vs REFERENCE TYPES
// VALUE TYPES => NUMBERS, STRINGS, BOOLEANS, SYMBOLS, UNDEFINED, NULL
// REFERENCE TYPES => OBJECTS, FUNCTIONS, ARRAYS

let x = {value: 10}
let y = x;

x.value = 20;
//  PRIMITIVES ARE COPIED BY THIER VALUES
//  OBJECTS ARE COPIED BY THEIR REFERENCES
let number = 10;

function increase(number) {
    number++    
}

increase(number);
console.log(number);

// ADDING/REMOVING PROPERTIES

function Circular(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circular = new Circular(10);
circular.location =  {x: 1 };

const propertyName = "location";

circular[propertyName] = {x: 1 };

// delete circular['location'];

// ENUMERATING PROPERTIES
for (let key in circle) {
    if (typeof circle[key !== 'function'])
    console.log(key, circle[key]);
}


const keys = Object.keys(circle)
console.log(keys);


if ('radius' in circle)
    console.log('Circle has a radius');


// ABSTRACTION: HIDE THE DETAILS AND SHOW THE ESSENTIALS
function Circulation(radius) {
    this.radius = radius;

    this.defaultLocation = {x:0 , y:0};
    this.computeOptimumLocation = function () {
        // ...
    }
    this.draw = function() {
        this.computeOptimumLocation();
        console.log('draw');
    };
}
const circulation = new Circulation(10);
circle.draw();








// PROTOTYPES
// PROTOTYPICAL INHERITANCE
// ES6 CLASSES (ECMASCRIPT 6/2015) => CLASSES