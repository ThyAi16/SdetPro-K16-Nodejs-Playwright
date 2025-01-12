// Sort an integer array from min to max
// Input: [12, 34, 1, 16, 28]
// Expected output: [1, 12, 16, 28, 34]

const readline = require('readline-sync');

function sortNumber(number1, number2) {  
   return number1 - number2;
}
let inputNumber = Number(readline.question('Input Number: '));
inputNumber.sort(sortNumber)
console.log(`Sort number: ${inputNumber}`);
