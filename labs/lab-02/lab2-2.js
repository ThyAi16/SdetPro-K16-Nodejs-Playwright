// Allow user to input a number, print out it’s an odd or even number

const readline = require("readline-sync");

let num = readline.question('Input number: ');
let number = Number(num % 2)

let validateNumber = number ? "Odd number" : "Even number" ;
console.log(validateNumber);


