const readlineSync = require('readline-sync');
/*a program which given a boolean indicating if the person can have a reduced tariff prints the price to pay. */


// let fulltariff = 10;
// let reducedtariff = 8;

// console.log('To select a ticket; 1 is for full tariff = 10€ and 0 is for reduced tariff = 8€')
// let userInput = parseInt(readlineSync.question('Please enter a number to select your ticket: ')); 
// let isReducedTariff = userInput === 0;
// if(isReducedTariff){
//     console.log('you have chosen reduced tariff. it will be = ' +reducedtariff+'euros');
// }
// else{
//     console.log('You have chosen full tariff. It will be = ' +fulltariff+'euros');
// }

/*  A program which given 3 numbers finds the maximum. */

// let a = parseInt(readlineSync.question('Enter the first number please: '));

// let b = parseInt(readlineSync.question('Enter the second number please: '));

// let c = parseInt(readlineSync.question('Enter the third number please: '));

// let maxNumber;

// if ( a > b && a > c){
//     maxNumber = a;
// }
// else if(b > a && b > c){
//     maxNumber = b;
// }
// else {
//     maxNumber = c;
// }
// console.log("The maximum number is: "+maxNumber);

/* A program which throws 3 dices and finds out the number of identical value, three, two or none */

// Throw the dice
// let d1 = Math.floor(Math.random() * 6) + 1;
// let d2 = Math.floor(Math.random() * 6) + 1;
// let d3 = Math.floor(Math.random() * 6) + 1;

// let result;

// if (d1 === d2 && d2 === d3) {
//   result = "Three identical values";
// } else if (d1 === d2 || d1 === d3 || d2 === d3) {
//   result = "Two identical values";
// } else {wa
//   result = "No identical values";
// }

// console.log("Dice 1:", +d1);
// console.log("Dice 2:", +d2);
// console.log("Dice 3:", +d3);
// console.log(result);

/* Write an algorithm which given the number of a day returns its name. */

// let dayNbr = parseInt(readlineSync.question('Enter any number of a day = '));
// let dayName;
// switch (dayNbr){
//     case 1:
//         dayName = 'Monday';
//         break;
//     case 2:
//         dayName = 'Tuesday';
//         break;
//     case 3:
//         dayName = 'Wednesday';
//         break;
//     case 4:
//         dayName = 'Thursday';
//         break;
//     case 5:
//         dayName = 'Friday';
//         break;
//     case 6:
//         dayName = 'Saturday';
//         break;
//     case 7:
//         dayName = 'Sunday';
//         break;

//     default:
//             dayName = 'Invalid day number';
//             break;
// }

// console.log(dayName);

/* A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price. */

let copies = parseInt(readlineSync.question("Please enter the number of copies = "));
let price;

if (copies <= 10) {
  price = copies * 0.12;
}

else if (copies <= 30) {
  price = 10 * 0.12 + (copies - 10) * 0.11;
}

else {
  price = 10 * 0.12 + 20 * 0.11 + (copies - 30) * 0.10;
}


console.log(price.toFixed(2));
//The toFixed function allows to reduce floating numbers after the decimal point to be two.