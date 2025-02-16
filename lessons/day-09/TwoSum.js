/*
* Two sum
* [3, 7, 22, 1], target number: 8
* -> index [1, 3]
*/

const givenArray = [3, 7, 22, 1];
const targetNum = 8;
let indices_1 = findIndicesUsingBruteForce(givenArray, targetNum);
console.log(indices_1);
let indices_2 = findIndicesUsingMap(givenArray, targetNum);
console.log(indices_2);

//Time Complexity: big 0 notation On mu 2 -> Do phuc tap tinh ve thoi gian
function findIndicesUsingBruteForce(array, targetNum) {
    for (let firstNumIndex = 0; firstNumIndex < array.length - 1; firstNumIndex++) {
        const firstNum = array[firstNumIndex];
        for (let secondNumIndex = firstNumIndex+ 1; secondNumIndex < array.length; secondNumIndex++) {
            const secondNum = array[secondNumIndex];
            if(secondNum === targetNum - firstNum) {
                return [firstNumIndex, secondNumIndex];
            }
        }
    }
    return [];
}

//O(n)
function findIndicesUsingMap(array, targetNum) {
    let numMap = new Map();
    for (let currentNumIndex = 0; currentNumIndex < array.length; currentNumIndex++) {
        const currentNum = array[currentNumIndex];
        const lookingNum = targetNum - currentNum;
        if(numMap.has(lookingNum)) {
            return [numMap.get(lookingNum), currentNumIndex];
        }
        numMap.set(currentNum, currentNumIndex); // Không tìm thấy lookingNumber thì sẽ lưu giá trị và index vào Map (numMap)
    }
    return [];
}

//Giới thiệu tool automation
