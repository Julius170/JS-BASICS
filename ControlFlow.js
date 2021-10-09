//  CONDITIONAL STATEMENTS
//  THE 2 TYPES OF CONDITIONAL STATEMENTS ARE 
// 1. IF...ELSE    2. SWITCH...CASE

// IF...ELSE

// Hour
// If the hoour is between 6am and 12pm: Good Morning;
// If it is between 12pm and 6pm: Good Afternoon;
// otherwise Good Evening;

let hour = 20;

if (hour >= 6 && hour < 12 ) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18 ) {
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening');
}


// SWITCH...CASE

let role ='moderator';

switch (role) {
    case 'guest':
        console.log ('Guest User');
        break;

    case 'moderator':
        console.log ('Moderator User');
        break;

    default:
        console.log ('Unknown User');
}

if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log ('Unknown User');



// LOOPS (ARE USED TO RUN A CODE FOR A SPECIFIC NUMBER OF TIME)

// ..........FOR LOOPS..........(THE LOOP VARIABLE IS PART OF THE LOOP ITSEELF)
// FORMAT

for (let i = 5; i >=1 ; i--) {
    console.log('Hello World', );

    if (i % 2 !== 0) console.log(i);
}


// WHILE LOOPS(THE VERIABLE IS DECLEARD EXTERNALLY)
let i = 0;
while(i <= 5) {
    if (i % 2 !== 0) console.log(i);
i++
}


// DO...WHILE LOOPS(WILL EXECUTE AT LEAST 1CE EVEN IF THE CONDITION IS FALSE)
let p = 9;
do {
    if (p % 2 !== 0) console.log(p);
p++
} while (p <= 5);


// INFINITE LOOPS 
let m = 0;
while (m < 5) {
    console.log(m);
    m++; //AN INFINITE LOOP WILL OCCUR WHEN YOU FORGET TO ADD THIS TO THE CONDITION
}
// OTHER INFINITE LOOPS
// while (true) {      

// }  OR

let a = 0;
do {
    a++; //AN INFINITE LOOP WILL OCCUR WHEN YOU FORGET TO ADD THIS TO THE CONDITION
} while (a < 5); 

// for (let a = 0; a > 0; a++) THIS WILL RUN AS AN INFINITE LOOP 


// FOR ...IN LOOPS
const person = {
    name: 'Phensic',
    age: 29
};

for (let key in person)
console.log(key, person [key]);

const color = ['red', 'orange', 'yellow'];
for (let index in color)
    console.log (index, color[index]);


// FOR...OF LOOPS
for (let colors of color)
console.log(colors);

// BREAK & CONTINUE
let h = 0
while (h <=10) {
    // if (h === 5) break;
    if (h % 2 === 0) {h
    
    h++;
    continue;
}
    console.log (h);
    h++
}


// EXERCISE 1
// WRITE A FUNCTION THAT TAKES TWO NUMBERS AND RETURNS THE MAXIMUM OF THE TWO
let number = max(20, 30);
console.log(number);

function max(number1, number2) {
// if (number1 > number2) number1; 
// return number2

    return(number1 > number2) ? number1 : number2;
}

// EXERCISE 2
let pictureType = isLandscape (55 , 33);
console.log(pictureType);

function isLandscape(width,height) {
    if (width > height) return true;
    return false;

    return (width > height);
} 
console.log (isLandscape(99, 100));


// EXECRCISE 3 FIZZBUZZ
// DIVISIBLE BY 3 => FIZZ
// DIVISIBLE BY 5 => BUZZ
// DIVISIBLE BY 3 AND 5 => FIZZBUZZ
// ! DIVISIBLE BY EITHER 3 OR 5 => INPUT
// ! A NUMBER => 'NOT A NUMBER' 
const output = fizzBuzz(true);
console.log(output);

function fizzBuzz(input) { 
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (typeof input !== 'number')
        return "NaN";
     
    if (input % 3 === 0)
        return 'Fizz';
    
    if (input % 5 === 0)
        return 'Buzz';


    return input;
}



// EXERCISE 3
// IF SPEED LIMIT < 70 PRINT 'OK'
// FOR EVERY 5  > 70 => 1 POINT
// USE Math.floor(1.3)
// IF SPEED > 12 POINTS => LICENSE SUSPENDED 

const speed = checkSpeed(130);


function checkSpeed(speed) {
   const speedLimit = 70;
   const kmPerPoint = 5;
    if (speed <= speedLimit + kmPerPoint) 
    console.log("OK");

    const point =  Math.floor((speed - speedLimit) /kmPerPoint);
    if (point >= 12)
        console.log("License suspended");
    else
        console.log("Point", point);
}

// EXERCISE 4
const Limit = showNumbers(10)
function showNumbers (Limit) {
    for(let i = 0; i <= Limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN': 'ODD'
        console.log(i, message)
    }
}



// EXERCISE 5
// FALSY VALUES (UNDEFINED, NULL, "", false, 0, NaN.)
const array = [3, 'kelvin', 2, 4, "", 7, 4654, "", false, 0, NaN];
 console.log (countTruthy(array));

function countTruthy(array) {
    let count = 1
    for (input of array) 
        if (input)
        count++;
        return (count);
}

// EXERCISE 6
const movie = {
title: "The Phensic",
releaseYear: 2019,
rating: 8.9,
director: "Phensic"
};

showProperties(movie);

function showProperties (object) {
for (let key in object)
    if (typeof object[key] === 'string')
    console.log(key,object[key]);
}



// EXERCISE 7  OBOY I STILL NO UNDERSTAND THIS ONE
// MULTIPLES OF 3: 3 6 9 
// MULTIPLES OF 5: 5 10
// console.log(sum(10));
console.log(sum(10));


function sum(Limit) {
    let need = 0;
   for( let start = 0; start <= Limit; start++) 
       if ((start % 3 === 0) || (start % 5 === 0))
        need += start;

        return need;
}


// EXERCISE 8
// AVERAGE = 
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [10, 10, 10];


console.log (calculateGrade(marks));

function calculateGrade(marks) {
const average = calculateAverage(marks);
if (average < 60) return "F";
if (average < 70) return "D";
if (average < 80) return "C";
if (average < 90) return "B";
else return "A"; 
}

function calculateAverage(array) {
    let use = 0;
for (let nums of marks)
    use += nums;
    return  sum/array.lenght;
}


// EXERCISE 9 

showStars(5);

function showStars (rows) {
for (let row = 1; row <=rows; row++) {
let pattern = '';
for (let i = 0; i< row; i++)
pattern +='*';
console.log(pattern);
}
}


// EXERCISE 10

showPrimes(20);

function showPrimes(Limit) {
for (let number = 2; number <= Limit; number++){
    
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0 ){
            isPrime = false;
         break;
        }
    }
 if (isPrime) console.log(number);
}
}