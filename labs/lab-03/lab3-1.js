// Count how many odd, even number(s) in an integer array
// let intArr = [1, 2, 3, 4, 5];
// Even numders: 2
// Odd numbers: 3

//Methods 1:

let intArr = [1, 2, 3, 4, 5];
let oddCount = 0;
let eventCount = 0;

for(let index = 0; index < intArr.length; index++) {
    
    if(intArr[index] % 2 !== 0) {
        oddCount++;
    } else {
        eventCount++;
    }
}
console.log('Methods 1:')
console.log(` Odd Number: ${oddCount}`);
console.log(` Even Number: ${eventCount}`);

//Methods 2:

let arr = [1, 2, 3, 4, 5];
let oddNumberCount = 0;
let evenNumberCount = 0;

for(let i = 0; i < arr.length; i ++) {
    if(isEvenNumber(arr[i])) {
        evenNumberCount++;
    }
    else {
        oddNumberCount++;
    }
}
function isEvenNumber(num) {
    return num % 2 === 0;
}
console.log('Methods 2:')
console.log(` Even number: ${evenNumberCount}`);
console.log(` Odd number: ${oddNumberCount}`);


