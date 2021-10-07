// ARRAYS
// ADDING ARRAYS
// FINDING ARRAYS 
// REMOVING ARRAYS
// SPLITTING ARRAYS
// COMBINING ARRAYS




// ADDING ELEMENTS 
const numbers = [3, 4];
// ADD TO THE END, BEGINING AND MIDDLE OF AN ARRAY

// END
numbers.push (5, 6);
// BEGINING
numbers.unshift (1, 2)
//MIDDLE
numbers.splice(4, 0,'a','b')

console.log(numbers);
// FINDING ELEMENTS (PRIMITIVE)
const number = [1,2,3,4,1]; 

console.log(number.indexOf(1,2 ));
console.log(number.lastIndexOf(1));
console.log(number.indexOf(1) !== -1);
console.log(numbers.includes(1));


const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.find(function(course) {       //or findIndex
   return course.name === 'b';
});

console.log(course);


// ARROW FUNCTION
const course1 = courses.find(course => course.name === 'b');

// REMOVING ELEMENTS
const numbering = [1,2,3,4];

// END => THIS WILL REMOVE THE LAST ELEMENT IN AN ARRAY AND RETURN IT 
const last = numbering.pop();

// BEGINING => REMOVES AND RETURNS THE ELEMENT FROM THE BEGINING
const start = numbering.shift();

// MIDDLE =>
numbering.splice(2, 2);
console.log(numbering);



// EMPTYING AN ARRAY
let renumber = [1,2,3,4,5];
another = renumber;

// 1st SOLUTION => SIMPLY REASSIGN TO A NEW ARRAY
renumber = [];

// 2nd SOLUTION
renumber.length = 0;

//  SOLUTION 3 
renumber.splice(0, renumber.length);

// SOLUTION 4 => THE POP METHOD 
while (renumber.length > 0)
renumber.pop();



// COMBINING ARRAYS | SLICING INTO TWO PARTS

const first = [{id: 1}];
const second = [4,5,6];
// CONCAT => JOINS TWO ARRAYS TOGETHER
const combine = first.concat(second);
first[0].id = 10;

// SLICE => SLICES AN ARRAY INTO TWO PARTS
const slice = combine.slice()

console.log(combine);
console.log(slice);

// SPREAD OPERATOR
const combined =[...first, 'a', ...second, 'b'];

const copy = [...combined];


// ITERATING AN ARRAY 

const numberer = [1,2,3];


for (let number of numberer)
console.log(number);

number.forEach ((number, index) => console.log(index, number));


// JOINING ARRAYS
const figures = [10,9,8];
const Join = figures.join(',');
console.log(Join);

const message = 'This is my first message';

const parts = message.split(' ');
console.log(parts);

const combination = parts.join('-');
 console.log(combination);


//  SORTING ARRAYS
const integers = [6,5,4];
integers.sort();
console.log(integers);

integers.reverse();
console.log(integers);

// SORTING OBJECTS

const coursera = [
{id:1, name: 'Node.js'},
{id:2, name: 'javaScript'},
];

coursera.sort(function (a, b) {
// a < b => -1
// a > b => 1
// a === b => 0 
const nameA = a.name.toUpperCase();  // TO CHANGE ALL INSTANCES TO UPPERCASE OR
const nameB = b.name.toUpperCase();  // ('...toLowerCase') => LOWER CASE 

if (a.nameA < b.nameB) return -1;
if (b.nameA > a.nameB) return 1;
return 0;
});

console.log(coursera);


// TESTING THE ELEMENTS OF AN ARRAY (NEW JAVASCRIPT METHODSN )

const specifics = [5,6,7,-1];
// EVERY => CHECKS IF ALL THE GIVEN ELEMENTS IN THE ARRAY MATCHES THE ARGUMENT
// WHILE SOME => CHECKS IF AT LEAST 1 ELEMENT IN THE ARRAY MATCHES THE ARGUMENT   
const atLeastOnePositive = specifics.some(function (Value){
    return Value >=0;
})

console.log(atLeastOnePositive);



// FILTERING AN ARRAY 
const digits = [1,2,3,4,0,-2];
const filtered = digits.filter (value => value >= 0);

console.log(filtered);



// MAPPING AN ARRAY (STRINGS/OBJECT)

const digit = [1, 2, 3, 4, 0, -2];
const filter = digits.filter(n => n >= 0);

const items = filter.map(n => '<li>' + n + '</li>');   //OR FOR AN OBJECT 
const item = filter.map(n => ({ value: n}) );

console.log(item);


console.log(items);

const html = '<ul>' + items.join(' ') + '<ul>';
 console.log(html);

// NOTE => CHAINING
// const items = digits
// .filter(n => n >= 0)
// .map(n => ({value: n}));


// REDUCING AN ARRAY 

const numerics = [1,2,-5,6];


const sum = numerics.reduce(
    (accumulator,currentValue) => accumulator + currentValue
,0); 
    
    console.log(sum);





// EXERCISE 1

const nums = arrayFromRange(1, 100);

console.log(nums);

function arrayFromRange (min, max){
    const output = [];
    for (let i = min; i <= max; i++)
    output.push(i);
    return output
}


// EXERCISE 2

const use =[1, 2, 3, 4];

function includes(array, searchElement) {
    for (let numbs of array)
        if (searchElement === numbs)
            return true;
    return false;
}

console.log(includes(use, 03));


// EXERCISE 3

const list = [1, 2, 3, 4];

const output = except(list, [1,2]);

console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;       
}

const gents = [1, 2, 3, 4];

const printOut = move (gents, 1, 0);

console.log(printOut);


function move (array, index, offset) {
    const position = index + offset;
    if (position >= array.length||position < 0) {
        console.error('invalid offset');
        return    
}
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index+offset, 0, element);
    return output;
}

// EXERCISE 4 ..... NEEDS MORE ATTENTION

const digitals = [1, 2, 3, 4, 1, 1, 1, 1];

// const count = countOccurences(digitals, 1);

// console.log(count);

function countOccurences (array, searchElement) {
//     let count = 0;
//     for (let element of array)
//         if (element === searchElement)
//         count++;
//     return count
// }

return array.reduce((accumulator, current) => {
    const  occurance = (current === searchElement) ? 1: 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurance;

}, 0);
}


// EXERCISE 5

const exer5 = [1, 2, 3, 4];

const max = getMax([1, 2, 3, 4]);

console.log(max);

function getMax(array) {
    if (array.length === 0) 
    return undefined;

//     let max = array[0];

//     for(let i = 1; i< array.length; i++)
//         if (array[i] > max)
//             max = array[i];

//     return max;
// }


// THE REDUCE METHOD;

return array.reduce((a, b) =>  (b > a) ? b : a);
}



// EXERCISE

const movies = [
    { title: 'a', year: 2020, rating: 4.5},
    { title: 'b', year: 2020, rating: 4.7},
    { title: 'c', year: 2020, rating: 3},  
    { title: 'd', year: 2021, rating: 4.5}
];
// GET ALL THE MOVIES IN 2018 WITH RATING > 4
// SORT THEM BY THEIR RATING IN A DESCRENDING ORDER
// ONLY DISPLAY THEIR TITLE PROPERTY ON THE CONSOLE


const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort ((a, b) => a.rating - b.rating)
    .reverse()
    .map (m => m.title)

    console.log(titles);
































