// Allow user to input a number, print out it’s an odd or even number

const readline = require("readline-sync");

let num = readline.question('Input number: ');
// let number = Number(num % 2)

// let validateNumber = number ? "Odd number" : "Even number" ;
// console.log(validateNumber);

// Check if the input is a valid number
if (isNaN(num)) {
    console.log("Invalid input. Please enter a numeric value.");
} else {
    // Determine if the number is odd or even
    let result = (num % 2 === 0) ? "Even number" : "Odd number";
    console.log(result);
}


