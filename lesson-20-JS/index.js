// JS names 
let userFirstName;
let userLastName;
let $name;
let $surname;
let name1;
let user_name;
let user_surname;
let user_first_name;
let user_second_name;

/*
Examples of wrong names :
let 1name;
let firstName#;
let @userName;
let user first name;
let Userfirstname;
*/

// Asking for name
let userName = prompt('What is your name?');
console.log(`Hello, ${userName}`);


// Calculating year of birth
const userBirthYear = +prompt('What is your year of birth?');
const year = 2023;
const userAge = year - userBirthYear;
console.log(`You are ${userAge} years old`);


//  Request a side length of a square from a user and display the perimeter of that square.
const squareSide = +prompt('Enter one side of square');
const squarePerimeter = squareSide *4;
console.log(`Perimeter: ${squarePerimeter}`);
// console.log('Perimeter:' + squarePerimeter);


// Area of a circle
const circleRadius = +prompt('Enter radius of the circle');
const PI = 3.14159;
const circleArea = PI * circleRadius ** 2;
console.log(`Circle area is ${circleArea}`);
 

// Calculating speed
const distanceInKM = +prompt('Enter distance in km');
const timeInHr = +prompt('Enter time in hours');
const speed = distanceInKM / timeInHr;
console.log(`Speed : ${speed} km/h`);


// Dollars to euro
const dollars = +prompt('Enter amount of dollars');
const dollarToEuro = 1.11;
const euro = Math.round(dollars / dollarToEuro);
console.log(`Euro: ${euro}`);