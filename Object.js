// OBJECT--RIENTED PROGRAMMING (OOP)
// IS A STYLE OF PROGRAMMING WHERE THE PROGRAM IS A COLLECTION OF OBJECTS
// TO PERFORM SOME FUNCTIONALIY.


const circle = {
    radius: 1,
    location: {
        x: 1, 
        y: 1
    },
    isVisible: true,
    draw: function() {                    // METHOD
        console.log("draw");
    }
};
circle.draw();                           // DRAW METHOD



// FACTORY FUNCTION

function createCircle (radius) {
    return {
        radius,
        draw () {
            console.log('MEME');
        }
    };           
}

const circle1 = createCircle (456);
console.log(circle1); 

const circle2 = createCircle (789);
console.log(circle2);


// CONSTRUCTOR FUNCTION
function Circle (radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('kenzy');
    }
}

const shape = new Circle(123);
console.log(shape);


// DYNAMIC NATURE OF OBJECTS
const oval = {
    radius: 1
};

oval.color = 'yellow';
oval.draw = function () {};

delete oval.color;
delete oval.draw;

console.log(oval);


// CONSTRUCTOR  PROPERTY
// THEY REFERENCE THE PROPERTIES THAT WAS USED TO CREATE
// THE OBJECT.


// FUNTIONS AND OBJECTS 
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw me');
    }
}; 
const mean = new Circle;;

// vALUE vs REFERENCE TYPES

let x = {Value: 20};
let y = x;

x.Value = 10;
// VALUES(PRIMITIVES) ARE COPIED BY THEIR VALUES
// OBJECTS(REFERENCE TYPES) ARE COPIED BY THEIR RERFERENCE


let object = {Value: 10};
function increase (object) {

    object.Value++;
}

increase(object);
console.log(object);


// ENUMERATING PROPERTIES OF AN OBJECT
const shapen = {
    radius:1,
    draw() {
        console.log("draw me now");
    }
};

for (let key in shapen)
console.log(key, shapen[key]);

for(let key of Object.keys(shapen))
console.log(key);


for (let entry of Object.entries(shapen))
    console.log(entry);
if ('radius' in shapen) console.log("yes");


// CLONING AN OBJECT 

const space = {
    radius: 1,
    draw() {
        console.log('draw this');

    }
};

// const spaceClone = {};

// for (let  key in space)
// spaceClone[key] = space[key];

                        //OR
// const spaceClone = (Object.assign({}, space))

                        //OR
const spaceClone = {...space };

console.log(spaceClone);

// GARBAGE COLLECTION
// JAVASCRIPT HAS AN AUTOMATIC GARBAGE COLLECTION
let size = { };
console.log(size);

// MATH
// MATH OPERATIONS OF JAVASCRIPT (GOOGLE[JAVASCRIPT MATH MDN])

// STRING/ STRKNG LITERALS (GOOGLE[JAVASCRIPT STRING MDN])
// STRING PRIMITIVE
const message = ('This is my \nfirst message');

// SRTING OBJECT
const something = new String('hi');

// TEMPLATE LITERALS

const message2 = 'This is my\n' + 
'first message;'

// OBJECT {}
// BOOLEANS => TRUE, FALSE
// STRING => '' ""
// TEMPLATE => ``

const message3 = `This is my 
'first' message`;


// DATE (GOOGLE[JAVASCRIPT DATE])

const current = new Date();
const date1 = new Date('October 16 2021 19:00');
const date2 = new Date (2020, 4, 29, 7, 0);

current.setFullYear(2019);



// EXERCISE
// CREATE AN ADDRESS OBJECT WITH THREE PROPERTIES
// STREET, CITY, ZIPCODE
// SHOWADDRESS(ADDRESS)


const myAddress = {
    street: 'Jouhaness',
    city: 'Cape Town',
    town: 'Kevnic Verde'
}

function showAddress (address) {
    for (let key in myAddress)
    console.log(key,  address[key]);

}

showAddress(myAddress)

// EXERCISE

// AN ADDRESS OBJECT WITH A FACTORY FUNCTION

function anAddress (street, city, town) {
    return{
        street,
        city,
        town,
    }
}


const yourAddress = anAddress ('Adeniyi', 'Alimosho', 'Agege')  //('kikelomo', 'adeniyi', 'pipeline')
console.log(yourAddress);

// AN ADDRESS OBJECT WITH A CONSTRUCTOR FUNCTION
function AnotherAddress (street, city, town) {
    this.street = street;
    this.city = city;
    this.town = town
}
 const showAddress2 = new AnotherAddress('Kikelomo', 'Akute', 'pipeline')
 console.log(showAddress2);


//  OBJECT EQUALITY


let address1 = new Address ('a', 'b', 'c');
let address2 = new Address ('a', 'b', 'c');
let address3 = address1;


console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));


// CONSTRUCTOR FUNCTION
function Address (street, city, town) {
    this.street = street;
    this.city = city;
    this.town = town
}
function areEqual (address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.town === address2.town;


}

function areSame (address1, address2) {
    return address1 === address2; 

}


// EXERCISE
// A BLOG POST 
// title, body, author, views, comments ( author, body), isLive



// `This Divine Solution

// Hi my name is Mayowa Ogungbola, and i am a member of the Deeper Life Bible Church.
// I am writing this blog post as a means of inviting you to join us at our upcoming 
// cursade titles the Divine Solution and grace the occaasion withe the presence of 
//God in you through your ministration `



const crusade = {
    title: 'The Divine Solution',
    body: 'invite',
    author: 'Mayowa Julius',
    views: '100',
    comments: [
        {author:'a', body:'b'},
        {author:'c', body:'d'},
    ],
    isLive: true
}

console.log(crusade);

let Post = new post('a','b','c');
console.log(Post);

function post (title, body, author,) {
    this.title = title,
    this.body = body,
    this.author = author,
    views = 0;
    this.comments = [];
    this.isLive = false
}
 

let priceRanges = [
    { label:'$', tooltip: 'inexpensive', minPerPerson: 0, maxPerPerson: 10},
    { label:'$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    { label:'$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50}

]
let restaurants = [
    {averagePerPerson: 5}
    
]












