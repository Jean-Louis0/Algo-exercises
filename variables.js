/* The sum of two chosen numbers */

// let a = 2;
// let b = 3;

// let sum = a + b;

// console.log("The sum of a and b is:" );
// console.log(sum);

/* The division of two chosen numbers */


// let a = 4;
// let b = 2;

// let division = a / b;

// console.log("The result of the division of a and b is:" );
// console.log(division);


/* The modulo of two chosen numbers */

// let a = parseFloat(prompt("Enter the first number please:"));
// let b = parseFloat(prompt("Enter the second number please:"));

// let modulo = a % b;

// console.log("The modulo of the first and 2nd numbers is:" );
// console.log(modulo);

/* The modulo of two inputed numbers */

// // Initialize readline
// const readlineSync = require('readline-sync');
// //input the values for the variables
// let a = parseFloat(readlineSync.question('Enter the first number: '));
// let b = parseFloat(readlineSync.question('Enter the second number: '));

// let modulo = a % b;

// console.log('The modulo of a and b is:');
// console.log(modulo);

/* To concatenate two phrases together */

// const readlineSync = require('readline-sync');
// // input the values for the variables


// let str1 = readlineSync.question('Enter the first string: ');
// let str2 = readlineSync.question('Enter the second string: ');

// let result = str1 + " " + str2;

// console.log("The concatenated string is:" + result);

/* program which receives a price without VAT and returns the price with VAT with a rate of 21%. */
// const readlineSync = require('readline-sync');

// let pricewithoutvat = parseFloat(readlineSync.question('Enter the price without vat please:'));
// let vat = (pricewithoutvat * 21) /100;
// let pricewithvat = pricewithoutvat + vat;

// console.log('The price with VAT is = '+ pricewithvat);


/* Program which receives the radius of a circle and calculate its surface */
// const readlineSync = require('readline-sync');

// let radius =  parseFloat(readlineSync.question('Please enter the radius: '));

// let Area  = Math.PI * Math.pow(radius, 2);

// console.log('The area of the circle is= '+ Area);

/* Program which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight. */
const readlineSync = require('readline-sync');
// Read the time of day from the user
let hour = parseInt(readlineSync.question("Enter the hour:"));
let minutes = parseInt(readlineSync.question("Enter the minutes:"));
let seconds = parseInt(readlineSync.question("Enter the seconds:"));

// Calculate the number of seconds since midnight
let secondsSinceMidnight = (hour * 60 * 60) + (minutes * 60) + seconds;

// Display the number of seconds since midnight
console.log("Number of seconds since midnight: " + secondsSinceMidnight);
