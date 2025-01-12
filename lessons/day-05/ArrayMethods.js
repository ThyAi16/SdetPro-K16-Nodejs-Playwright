const { Console } = require("console");

let array = [1, 2, 3, 4, 5];

//Map: ánh xạ từ tập hợp này sang tập hợp khác
let returnedValues = array.map(myRule);
//console.log(returnedValues);
//console.log(array);

function myRule( value, index, array) {
    return value * 2;
}
//Foreach
let userList = [];
array.forEach(addAutomationUsername);
function addAutomationUsername(value, index, array) {
    userList.push(`AutomationUser_${value}`);
}
//console.log(userList);

//Sort - String
let myString = ['B', 'C', 'A'];
myString.sort();
myString.reverse();
//console.log(myString);

//Sort - Number
let anotherArray = [100, 18, 44];
anotherArray.sort(sortNumberASC);
console.log(anotherArray);
anotherArray.sort(sortNumberDESC);
console.log(anotherArray);

function sortNumberASC(num1, num2) {
    return num1 - num2;
}
function sortNumberDESC(num1, num2) {
    return num2 - num1;
}
//Sort mixed content
let mixedContent = ['a', 'A', '1'];
mixedContent.sort();
console.log(mixedContent);


