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
// const circle = createCircle(1);
circle.draw();


// CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
    console.log('draw');
    }
}

const Circle1 = new Function('radius',`
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }`
    );

const circle = new Circle(1);

const another = new Circle(1);
console.log('is this code really working');


// CONSTRUCTOR PROPERTY: e.g(another.constructor)
// EVERY OBJECT HAS A CONSTRUCTOR PROPERTY THAT REFERENCES THE 
// FUNCTION THAT WAS USED TO CREATE THE OBJECT 


// FUNCTION ARE OBJECT




// PROTOTYPES
// PROTOTYPICAL INHERITANCE
// ES6 CLASSES (ECMASCRIPT 6/2015) => CLASSES