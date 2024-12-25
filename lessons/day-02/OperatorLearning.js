// Naming convention
// Reserved keywords
// camelCase, snake_case, PascalCase
let myVar = 3;
const PI_NUMBER = 2;

let myNum1 = 1;
let myNum2 = 2;
// 1. Right operand and left operand
let result = myNum1 + myNum2; // Resolved
console.log('Total result: ' + result);
console.log('Total result:', result);

//String template/literal (`:)
// [`]: backstick
console.log(`Total result: ${result + 1}`);

//Forward slash
result = 5/2;
console.log(`5/2: ${result}`);
console.log(`10/3: ${10 / 3}`);

//Rounding
let RoundingNearest = Math.round(9 / 2);
console.log(`Rounding Nearest: ${RoundingNearest}`);
//Rounding Flooring
let RoundingFloorling = Math.floor(9/2);
console.log(`Rounding Flooring: ${RoundingFloorling}`);
//Rounding Ceil
let RoundingCeil = Math.ceil(9/2);
console.log(`Rounding Ceil: ${RoundingCeil}`);
//^
let multi = 3 ** 2;
console.log(multi);
