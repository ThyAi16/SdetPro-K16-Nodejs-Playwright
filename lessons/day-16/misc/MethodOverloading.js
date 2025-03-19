// JS khong co overloading

class MethodOverloading {
  // static add(a, b) {
  //   return a + b;
  // }

  // static add(a, b, c) {
  //   return a + b + c;
  // }

  // Rest parameter
  // (...nums): đại diện chho 1 array
  // static add(...nums) {
  //   let sum = 0;
  //   for (let num of nums) {
  //     sum += num;
  //     //sum = sum + num;
  //   }
  //   return sum;
  // }

  // Option:
  static add_(factor, another, ...nums) {
    //console.log(nums);
    return nums.map((num) => num * factor);
  }
}

const result1 = MethodOverloading.add_(1, 2);
const result2 = MethodOverloading.add_(1, 2, 3);

// console.log(result1);
// console.log(result2);

class ArrayHelper {
  static filterNumber(array, isEven) {
    if (isEven) {
      return array.filter((num) => num % 2 === 0);
    } else {
      return array.filter((num) => num % 2 !== 0);
    }
  }
}

let targetNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isEven = true;
const evenNumber = ArrayHelper.filterNumber(targetNumber, isEven);
const oddNumber = ArrayHelper.filterNumber(targetNumber);

console.log(evenNumber);
console.log(oddNumber);
