const readlineSync = require('readline-sync');
/* A program which prints everything in an array. */
// let a = [1, 2, 3, 4, 5];

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

/* A program that finds the maximum value in an array */

// let length = parseInt(readlineSync.question("Enter the number of elements to be stored in the array = "));

// if(length <= 0) {
//   length = parseInt(readlineSync.question("Please enter a positive integer = "));
// }

// let a = [];

// for (let i = 0; i < length; i++) {
//   let value = parseInt(readlineSync.question("Enter element " + (i + 1) + "= "));
  
//     if (value < 0){
//         value = parseInt(readlineSync.question("Please enter an integer = "));
//     }
//     else{
//         a.push(value);
//     }
// }

// let max = a[0];
// let i = 1;

// while (i < length) {
//   if (a[i] > max) {
//     max = a[i];
//   }
//   i++;
// }

// console.log("The maximum value is:", max);

/* A program that finds the minimum value in an array */

// let length = parseInt(readlineSync.question("Enter the number of elements to be stored in the array = "));

// if(length <= 0) {
//   length = parseInt(readlineSync.question("Please enter a positive integer = "));
// }

// let a = [];

// for (let i = 0; i < length; i++) {
//   let value = parseInt(readlineSync.question("Enter element " + (i + 1) + "= "));
  
//     if (value < 0){
//         value = parseInt(readlineSync.question("Please enter an integer = "));
//     }
//     else{
//         a.push(value);
//     }
// }

// let min = a[0];
// let i = 1;

// while (i < length) {
//   if (a[i] < min) {
//     min = a[i];
//   }
//   i++;
// }

// console.log("The minimum value is:", min);

/* A program that finds the position of the minimum value in an array */

// let length = parseInt(readlineSync.question("Enter the number of elements to be stored in the array = "));

// if(length <= 0) {
//   length = parseInt(readlineSync.question("Please enter a positive integer = "));
// }

// let a = [];

// for (let i = 0; i < length; i++) {
//   let value = parseInt(readlineSync.question("Enter element " + (i + 1) + "= "));
  
//     if (value < 0){
//         value = parseInt(readlineSync.question("Please enter an integer = "));
//     }
//     else{
//         a.push(value);
//     }
// }

// let min = a[0];
// let i = 1;

// while (i < length) {
//   if (a[i] < min) {
//     min = a[i];
//     // let b = a.indexOf(min);
//   }
//   i++;
// }

// console.log("The position of the minimum value is:", a.indexOf(min));

/* Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not. */

// let isOrdered;
// let length = parseInt(readlineSync.question("Enter the number of elements to be stored in the array = "));

// if(length <= 0) {
//   length = parseInt(readlineSync.question("Please enter a positive integer = "));
// }
// let a = [];

// for (let i = 0; i < length; i++) {
//   let value = parseInt(readlineSync.question("Enter element " + (i + 1) + "= "));
  
//     if (value < 0){
//         value = parseInt(readlineSync.question("Please enter an integer = "));
//     }
//     else{
//         a.push(value);
//     }
// }

// for (let i = 1; i < a.length; i++){
//     if(a[i] < a[i - 1]) {
//         isOrdered =  false;
//     }
// }
// console.log(isOrdered);