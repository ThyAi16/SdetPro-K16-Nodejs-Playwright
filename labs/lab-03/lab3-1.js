// Count how many odd, even number(s) in an integer array
// let intArr = [1, 2, 3, 4, 5];
// Even numders: 2
// Odd numbers: 3

//Methods 1:
let arr = [1, 2, 3, 4, 5];
let oddCount = 0;
let eventCount = 0;
let oddNumber = [];
let evenNumber = [];

for(let index = 0; index < arr.length; index++) {
    
    if(arr[index] % 2 !== 0) {
        oddCount++;
        oddNumber.push(arr[index]);
    } else {
        eventCount++;
        evenNumber.push(arr[index]);
    }
}
console.log('Methods 1:')
console.log(`Odd Count: ${oddCount}, Numbers: ${printOut(oddNumber)}`);
console.log(`Even Count: ${eventCount}, Numbers: ${printOut(evenNumber)}`);

function printOut(arr) {
    if(arr.length === 0) {
        return '';
    }
    else {
        return `-> ${arr}`;
    }
}

//Methods 2:
// let array = [1, 2, 3, 4, 5];
// let oddNumberCount = 0;
// let evenNumberCount = 0;

// for(let i = 0; i < array.length; i ++) {
//     if(isEvenNumber(array[i])) {
//         evenNumberCount++;
//     }
//     else {
//         oddNumberCount++;
//     }
// }
// function isEvenNumber(num) {
//     return num % 2 === 0;
// }
// console.log('Methods 2:')
// console.log(` Even number: ${evenNumberCount}`);
// console.log(` Odd number: ${oddNumberCount}`);


