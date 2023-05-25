const readlineSync = require ("readline-sync");
 /* a function which receives two strings and returns them as one string. */

//  function concatenate_two_strings(str1, str2){
//     console.log(str1 + str2);
//  }

// let string1 = readlineSync.question("Enter the first string = ");
// let string2 = readlineSync.question("Enter the second string = ");

// concatenate_two_strings(string1, string2);

/* function which receives a character in uppercase and prints it in lowercase. */

// function uppercase_to_lowercase(str1){
//     let str = str1.toLowerCase();
//     console.log(str);
// }

// let string1 =  readlineSync.question("Enter the string = ");

// uppercase_to_lowercase(string1);

/* function which receives a string in lowercase and returns an uppercase sentence. */

// function lowercase_to_uppercase(str1){
//     let str = str1.toUpperCase();
//     console.log(str);
// }

// let string1 =  readlineSync.question("Enter the string = ");

// lowercase_to_uppercase(string1);


/* function which receives a name in this format "Doe, John" an returns it in this format "John Doe" */

// function convertNameFormat(name) {
//     let partsofname = name.split(", ");
//     let firstname = partsofname[1];
//     let lastname = partsofname[0];
//     return firstname + " " + lastname;
// }

// let name = "Doe, John";
// let convertedName = convertNameFormat(name);
// console.log(convertedName);

/* unction which receives a sentence full of whitespace and returns it without them in js */

function removeWhitespace(stc) {
    let NoWhitespacestc =  stc.replace(/\s/g, "");
    console.log(NoWhitespacestc);
}
let Whitespacestc = readlineSync.question("Please enter a sentence with as many whitespaces as you wish = ");
removeWhitespace(Whitespacestc);
    