//let myArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
//DELETE | Splice
// let startIndex = 3;
// let deleteCount = 9;
// let insertValue = 10;
// let returnedValue = myArray.splice(startIndex, deleteCount, insertValue);
//console.log(returnedValue);
//console.log(myArray);

//Pratice
//Method 1:
// let myArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //Remove number % 2 !== 0
// for( let index = 0; index < myArrayNumber.length; index++) {
//     // if (isOddNumber(myArrayNumber[index])) {
//     //     removeElementFromArray(myArrayNumber, index);
//     // }

//     if(myArrayNumber[index] % 2 !== 0) {
//          myArrayNumber.splice(index, 1);    
//     }   
// }
//console.log(myArrayNumber) 

//Method 2: Use Function
let myArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
for (let index = 0; index < myArray.length; index++) {
    if(isOddNumber(myArray[index])) {
        removeElementFromArr(myArray, index);
        index--;
    }
}
console.log(myArray);

function isOddNumber(number) {
    return number % 2 !== 0;
}
function removeElementFromArr(array, startIndex) {
    const defaultDeleteCount = 1;
    array.splice(startIndex, defaultDeleteCount);
}