// Merge 2 SORTED integer array into one SORTED array
// Array 01: [1, 12, 16, 28, 34]
// Array 02: [1, 13, 16, 27, 99]

// Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]

let arr1 = [1, 12, 16, 28, 34];
let arr2 = [1, 13, 16, 27, 99];
let mergeArr = arr1 + arr2;

mergeArr.sort(sortMergeArrASC);
console.log(`Sort merge array: ${sortMergeArrASC}`);

function sortMergeArrASC( num1, num2) {
    return num1 - num2;
}
// Can you explain clearly when to declare variables as "const", "let", "var"? I'm not very clear about this.