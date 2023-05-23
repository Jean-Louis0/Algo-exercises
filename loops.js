const readlineSync = require('readline-sync');

// let n = parseInt(readlineSync.question('Please enter n = '));

// // prints the numbers from 1 to n
// console.log("These are all the numbers from 1 to " +n+ ": ");
// for(let i = 1; i <= n; i++){
//     console.log(i);
// }

// // prints the numbers from 1 to n in descending order
// console.log("These are all the numbers from " +n+ " to 1: ");
// for(let j = n; j >= 1; j--){
//     console.log(j);
// }

// // prints the numbers from -n to n

// console.log("Numbers from -" +n+ "to" +n+ ":");
// for(let k = -n; k <= n; k++){
//     console.log(k);
// }

// // Prints the odd numbers from 1 to n
// console.log("Odd numbers from 1 to" +n+ ":");
// for(let l = 1; l<=n; l++){
//     if(l%2 !== 0){
//         console.log(l);
//     }
// }


/* Algorithm which receives a random integer and prints from 0 to it */

// let n = parseInt(readlineSync.question('Enter any random integer = '));
// console.log('numbers from 0 to:' +n);

// for(let i = 0; i <= n; i++){
//     console.log(i);
// }   


/* A program which throws a dice a given number of time and count the number of time a certain number is received. */
let number_of_throws = parseInt(readlineSync.question("Please enter the number of Throws = "));
let number_to_be_received = Math.floor(Math.random() * 6) + 1;
let count = 0;
for (i = 0; i <= number_of_throws; i++){
    let diceNumber = Math.floor(Math.random() * 6) + 1;

    if(diceNumber === number_to_be_received){
        count++;
    }
    console.log("the number = " +number_to_be_received+ " was received = "+count+" times out of " +number_of_throws+ " throws");
}

/* A program which prints all the even numbers from 0 to a given number. */

// let n = parseInt(readlineSync.question('Enter any random integer = '));
// console.log('numbers from 0 to:' +n);

// for(let i = 0; i <= n; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

/* A program to say if a number is perfect or not */

// let n = parseInt(readlineSync.question('Enter any any number = '));

// let sum = 0;

// for(let i=1; i<n; i++){
//     if(n%i === 0){
//         sum = sum + i;
//     }
// }

// if(sum === n) {
//     console.log(n+ " is a perfect number");
// }
// else {
//     console.log(n+ " is not a perfect number");
// }
