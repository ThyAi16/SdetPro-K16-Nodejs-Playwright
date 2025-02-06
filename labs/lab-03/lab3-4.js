// Merge 2 SORTED integer array into one SORTED array
// Array 01: [1, 12, 16, 28, 34]
// Array 02: [1, 13, 16, 27, 99]

// Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]

let arr1 = [1, 12, 16, 28, 34];
let arr2 = [1, 13, 16, 27, 99];
let mergeArr = [];

const arr1Lenght = arr1.length;
const arr2Lenght = arr2.length;
let arr1Position = 0;
let arr2Position = 0;

while (arr1Position < arr1Lenght && arr2Position < arr2Lenght) {
    const arr1Value = arr1[arr1Position];
    const arr2Value = arr2[arr2Position]
    if (arr1Value <= arr2Value) {
        mergeArr.push(arr1Value);
        arr1Position++;
    } else {
        mergeArr.push(arr2Value);
        arr2Position++;
    }
}

while (arr1Position < arr1Lenght) {
    mergeArr.push(arr1[arr1Position]);
    arr1Position++;
};

while (arr2Position < arr2Lenght) {
    mergeArr.push(arr2[arr2Position]);
    arr2Position++;
}
console.log(mergeArr);