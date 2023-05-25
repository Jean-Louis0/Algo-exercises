const readlineSync = require('readline-sync');

/* A program which throws a dice a given number of time and count the number of time a certain number is received. */

// function rollDice(number_of_throws, number_to_be_received) {
//     let count = 0;

  
//     for (let i = 0; i < number_of_throws; i++) {
//         let diceNumber = Math.floor(Math.random() * 6) + 1;
  
//         if (diceNumber === number_to_be_received) {
//             count++;
//         }
//     }
  
//     return count;
// }

// let number_of_throws = 10;
// let number_to_be_received = 3;
      
// let occurrences = rollDice(number_of_throws, number_to_be_received);
// console.log("The number: " +number_to_be_received+ " occurred " +occurrences+ " times out of " +number_of_throws+ " throws.");

/* A program to check if a given number is perfect or not */
 
// function isPerfectNumber(n) {
//     let sum = 0;
  
//     for (let i = 1; i < n; i++) {
//       if (n % i === 0) {
//         sum = sum + i;
//       }
//     }
  
//     if (sum === n && sum !== 0) {
//         console.log(n + " is a perfect number.");
//     } else {
//         console.log(n + " is not a perfect number.");
//     }
//   }
  
//   let n = parseInt(readlineSync.question("Enter any number = "));
//   isPerfectNumber(n);
  
/* A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price. */

// function print(copies){
//     let price;
//     if (copies <= 10) {
//         price = copies * 0.12;
//       }
      
//       else if (copies <= 30) {
//         price = 10 * 0.12 + (copies - 10) * 0.11;
//       }
      
//       else {
//         price = 10 * 0.12 + 20 * 0.11 + (copies - 30) * 0.10;
//       }    
//       console.log("the price is: " +price.toFixed(2)+ "euros");
// }

// let copies = parseInt(readlineSync.question("Please enter the number of copies = "));

// print(copies);

/* A program that finds the minimum value in an array */
// function getMinimumValue(tab) {
//     if (tab.length === 0) {
//       return null;
//     }
  
//     let min = tab[0];
  
//     for (let i = 1; i < tab.length; i++) {
//       if (tab[i] < min) {
//         min = tab[i];
//       }
//     }
//     return min;
//   }
  
//   // Function for input
//   function enterArrayValues(length) {
//     var numbers = [];
  
//     for (let i = 0; i < length; i++) {
//       let value = parseInt(readlineSync.question("Enter value " + (i + 1) + " of " + length + ":"));
//       numbers.push(parseInt(value));
//     }
  
//     return numbers;
//   }
  
//   //input the length of the array
//   var length = parseInt(readlineSync.question("Enter the length of the array:"), 10);
  
//   // Check if the entered length is valid
//   if (isNaN(length) || length <= 0) {
//     console.log("Invalid length entered. Program terminated.");
//   } 
//   else {
//     // Call the function to enter the values for the array
//     let values = enterArrayValues(length);
  
//     // Find the minimum value in the array using the function
//     let min = getMinimumValue(values);
  
//     // Check if min is null, indicating an empty array
//     if (min === null) {
//       console.log("Error: Array is empty.");
//     } else {
//       // Display the minimum value
//       console.log("The minimum value is: " + min);
//     }
//   }

/* Program which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight. */

function getSecondssincemidnight(hour, minutes, seconds){
    let secondsSinceMidnight = (hour * 60 * 60) + (minutes * 60) + seconds;
    return secondsSinceMidnight;
}

let hour = parseInt(readlineSync.question("Enter the hour:"));
let minutes = parseInt(readlineSync.question("Enter the minutes:"));
let seconds = parseInt(readlineSync.question("Enter the seconds:"));

secondsSinceMidnight = (hour * 60 * 60) + (minutes * 60) + seconds;

getSecondssincemidnight(hour, minutes, seconds);

console.log("Number of seconds since midnight: " +secondsSinceMidnight);