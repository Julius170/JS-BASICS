console.log("Hello World!");
// VARIABLES
let name = 'Mayor';
console.log(name);
// cannot be a reserved keyword
// should be meaningful
// cannot start with a number(1name)
// cannot contain a space or hyphene(-)
// They are case sensitive
let firstName = 'Mayor';
let lastName = 'Julius';
// CONSTANTS
let interesRate = 0.3;
interestRate = 1;
console.log(interestRate);
const interest = 0.5;
// interest = 12;
console.log(interest);
// PRIMITIVE/ VALUE TYPE(Stings, Boolean, Number, Undefined & Null)
 let codeName = 'Phensic'; // string literal 
 let age = 29;  // number literal
 let isApproved = true; //boolean literal
 let firstName1 = undefined;
 let lastName1 = null;
 let colorChoice = null;
//  JavaScript is a Dynamic Language
// REFERENCE TYPE (Object, Array, Function)
let person = {
    callMe: 'Julius',
    year: 2001
};
console.log(person);
// to access the properties you can use 1. (Dot notation) OR
person.callMe = "Phensical";
console.log(person.callMe);
// 2.Bracket Notation
person['callMe'] = 'Kolade';
console.log(person.callMe);
// ARRAYS 
let selectedColor = ['red','blue'];
console.log(selectedColor);
console.log(selectedColor[0]);
selectedColor[2] ='green';
console.log(selectedColor.length);
// FUNCTIONS (PERFORMING A TASK)
function greet(name, lastName2) {
  console.log("Hello"+ ' ' + name + ' ' + lastName2);
}
greet('Kenny','Murphy');
greet('Murphy','Kenny');
// CALCULATING A VALUE;
function square(number){
return number*number;  
}

let number = square(2);
console.log(number);
// OR 
console.log(square(22));
//  OPERATORS (ARITHMETICS, ASSIGNMENT, COMPARISON, LOGICAL, BITWISE)
//  ARITHMETIC OPERATORS
let x = 10
let y = 5
console.log (x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// INCREMENT (++)
console.log(x++);
console.log(x);
// DECREMENT (--)
console.log(--x);
// ASSIGNMENT OPERATORS

let m = 10;
m = m + 5;
m +=5;
m = m * 3;
// COMPARISON OPERATORS
let a = 11;
// relational operator
 console.log (x > 0);
console.log(x >= 10);
console.log(x < 0);
console.log(x <= 22);

// STRICT EQUALITY OPERATOR (Type+Value)
console.log(x === 11);
console.log(x !== 11);
console.log(1 === 1);
console.log(1 === '1');

// LOOSE EQUALITY OPERATOR(Value)
console.log(1 == 1);
console.log(1 == '1');

// TERNARY(CONDITIONAL) OPERATOR
// If the customer has more than 100 points
// they are a 'gold' customer, otherwise,
// they are a silver customer.

let point = 110;
let type = point > 100 ? 'gold' : 'silver';
console.log(type);

 let score = 100;
 let kind = score >100 ? 'gold' : 'silver';
console.log(kind);

// LOGICAL OPERATORS (AND, OR & NOT)
// AND && (RETURNS TRUE IF BOTH OPERANDS ARE TRUE)
console.log (true && true); 
console.log(false && true);

// OR ||(RETURNS TRUE IF ONE OF THE OPERANDS IS TRUE)
 let highIncome = false;
 let goodCreditScore  = true;
 let eligibleForLoan = highIncome || goodCreditScore;

 console.log(eligibleForLoan);

//  NOT !
let applicationRefused = !eligibleForLoan;

console.log(applicationRefused)

// LOGICAL OPERATORS WITH NON-BOOLEANS
// FALSY(FALSE): UNDEFINED, NULL, 0, FALSE, '', NaN.

// ANYTHING THAT IS NOT FALSY-> TRUTHY
// false || 1 || 2 ..................(Short-circuiting)
let userColor = undefined;
let defaultColor =  'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);


// BITWISE OPERATOR
//  1 = 00000001
//  2 = 00000010
//  R = 3= 000000111
console.log(1 | 2); //BITWISE OR if one of the  numbers is 1 then result = 1
console.log(1 & 2); //BITWISE AND... if both numbers are 1 then result =1 else=0
// REAL WORLD EXAMPLE
// READ, WRITE AND EXECUTE
// 00000100
// 00000010
// 00000001
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0
myPermission = myPermission | writePermission; //.....add permission
console.log(myPermission);

let message = (myPermission & readPermission)? "Yes":"No"//.....check permission
console.log(message);

// OPERATOR PRECEDENCE
 let k = (2 + 3) * 4;
 console.log(k);


//  EXERCISE
let o = 'red';
let b = 'blue';

let l = o;
o = b;
b = l;


console.log(o);
console.log(b);


