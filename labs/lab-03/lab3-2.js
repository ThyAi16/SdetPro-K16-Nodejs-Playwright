// Finding maximum value/minimum value from an integer array
// let intArr = [1, 2, 3, 4, 5];
// Minimum: 1
// Maximum: 5

// Methods 1:
// let intArr = [1, 2, 3, 4, 5];
// let maxNumber = intArr[0];
// let minNumber = intArr[0];
// let returnedMax = intArr.map(arrNumber)

// function arrNumber(value, index, array) {
//     if(value > maxNumber) {
//         maxNumber = value;
//     }
//     else if (value < minNumber) {
//         minNumber = value;
//     }
// }
// console.log('Methods 1')
// console.log(` Max number: ${maxNumber}`);
// console.log(` Min number: ${minNumber}`);

//Methods 2:
let arr = [1, 2, 3, 4, 5];
let maxNumber1 = arr[0];
let minNumber1 = arr[0];

for( let i = 0; i < arr.length; i++) {
    if(arr[i] > maxNumber1) {
        maxNumber1 = arr[i];
    }
    if (arr[i] < minNumber1) {
        minNumber1 = arr[i];
    }
}
console.log('Methods 2:');
if (minNumber1 == maxNumber1) {
    console.log('There is no min/max value, all value are same: ', minNumber1)
}
else {
    console.log(`Min value: ${minNumber1} and Max value: ${maxNumber1}`);
}
