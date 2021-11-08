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
// => CREATION OBJECTS WITH AN OBJECT LITERAL SYNTAX NOT ADVISABLE
// WHEN THE OBJECT HAS A BEHAVIOUR (FUNCTION) USE THE FACTORY AND CONSTRUCTOR
const object = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};
object.draw();


//THE CONSTRUCTOR PROPERT => REFERENCES THE FUNCTION THAT WAS USED TO CREATE THE OBJECT

// FACTORY FUNCTION
function createObject(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
};
const object2 = createObject(1);


// CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius;
    this.draw =function() {
        console.log(draw);
    } 
}
const another = new Circle(1);    //USING NEW OR
Circle.call({}, 1)                // CALL ARE THE SAME THING
Circle.apply({}, [1, 2, 3, 4])    //OR USE APPLY IF THE 2ND ARGUMENT IS AN ARRAY


// FUNCTIONS ARE OBJECTS
const Circle1 = new Function('radius', `
        this.radius = radius;
        this.draw = function() {
            console.log(draw);
        }
    `)
const circle = new Circle1(1);


// VALUE vs REFERENCE TYPES

// VALUE/PRIMITIVE TYPES => NUMBERS, STRINGS, BOOLEANS, SYMBOLS, UNDEFINED, NULL
//=>  PRIMITIVES ARE COPIED BY THIER VALUES
//=> AND ARE INDEPENDENT TO ONE ANOTHER
let x = 400;
let y = x;

x = 200



// REFERENCE/OBJECT TYPES => OBJECTS, FUNCTIONS, ARRAYS
//=>  OBJECTS ARE COPIED BY THEIR REFERENCES
//=> AND ARE DEPENDENT

let p = {value: 10};
let q = p

p.value = 20

// OR ANOTHER EXAMPLE IS:

let obj = {value:10 };
function increase(number) {
    obj.value++;
}

increase(obj);
console.log(obj);




// ADDING/REMOVING PROPERTIES
//=> OBJECTS ARE DYNAMIC

function Circular(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw');
    }
}

const circular = new Circular(10);

circular.location = { x: 200 };        // THE DOT NOTATION 


const propertyName = 'location';
circular['propertyName'] = { x: 1 };     // AND THE BRACKET NOTATION ARE SAME
//=> THE BRACKET NOTATION ARE USED WITH PROPERTY NAMES THAT ARE NOT VALID IDETIFYERS (-,SPACE)

// DELETING PROPERIES
// delete circular.location;


// ENUMERATING PROPERTIES(FOR-IN LOOP)
for (let key in circular) {       //ENUMERATING OBJECT MEMBERS
    if (typeof circular[key] !== 'function')   //
    console.log(key, circular[key]); 
}
//  OR ANOTHER APPROACH CAN BE THIS TO GET ALL THE KEYS
const keys = Object.keys(circular);  //BUT CANNOT SEPERATE PROPERTIES FROM METHODS  
console.log(keys);

//BUT TO CHECK THE EXISTENCE OF A PROPERTY IN AN OBJECT: (IN OPERATOR)
if ('radius' in circular)
console.log("The Circular Object already has a radius as a property.");



// ABSTARCATION: A CONCEPT THAT HIDES THE DETIALS/COMPEXITY AND
// SHOW/EXPOSE THE ESSENTIALS

// PRIVATE PROPERTIES AND METHODS

function Shapen(circumference) {
    this.circumference = circumference;

    let defaultLocation = {x: 0, y: 0};
    
    let computeOptimumLocation = function (factor) {
    // ...
}
    this.draw = function() {
        computeOptimumLocation(0.1);
        // defaultLocation
        // this.radius

        console.log('draw');
    };
}

const shape = new Shapen (200);
shape.draw();




// GETTERS AND SETTERS
function square(length) {
    this.length = length;

    let primaryLocation = {x:10, y:20};

    this.getPrimaryLocation = function() {
        return primaryLocation
    }
    this.draw = function() {
        console.log('draw');
    };
    // GETTER: A FUNCTION USED TO READ A PROPERTY

    Object.defineProperty(this, 'primaryLocation', {
        get: function() {
            return primaryLocation;
        },
    // A SETTER: A FUNCTION THAT ENABLES USERS TO SET THE VALUES FROM THE OUTSIDE

            // set: function(value) {
            //     if (!value.x || !value.y)
            //         throw new Error('Invalid Location');

            //     primaryLocation = value;
        // }
    });
}

const sqr = new square ();
sqr.primaryLocation = 1;
sqr.draw();





// EXERCISE: A STOPWATCH

function Stopwatch () {
    let startTime, endTime, running, duration = 0;

this.start = function() {
    if (running)
        throw new Error('Stopwatch has already started.');
    
    running = true;

    startTime = new Date();
};

this.stop = function() {
    if (!running)
        throw new Error (" Stopwatch has not started.");
    
    running: false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime())/1000;
    duration += seconds;
};

this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
};

Object.defineProperty(this, 'duration', {
    get:function() {
        return duration;
    }
});
}



const sw = new Stopwatch();