// Sort an integer array from min to max
// Input: [12, 34, 1, 16, 28]
// Expected output: [1, 12, 16, 28, 34]

let array = [12, 34, 1, 16, 28];
let unsortedPosition = array.length - 1;

//Methods 1:
// for (; unsortedPosition > 0; unsortedPosition--) {
//     for(let index = 0; index < unsortedPosition; index++) {
//         const leftValue = array[index];
//         const rightValue = array[index + 1];
//         if (leftValue > rightValue) {
//             swap(array, index);
//         }
//     }
// }
// console.log(array);

// function swap(array, index) {
//     let temp = array[index];
//     array[index] = array[index + 1];
//     array[index + 1] = temp;
// }

//Methods 2:
while (unsortedPosition > 0) {
    for(let index = 0; index < unsortedPosition; index++) {
        const leftValue = array[index];
        const rightValue = array[index + 1];
        const isWrongPlace = leftValue > rightValue;
        if (isWrongPlace) {
            swap(array, index);
        }
    }
    unsortedPosition--;
}
console.log(array);

function swap(array, index) {
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
}
