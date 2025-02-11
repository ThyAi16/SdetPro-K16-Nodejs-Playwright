const readline = require('readline-sync');
const randomNumber = generateRandomNumber();
let guessingTime = 0;
do {
    //something: thuc thi it nhat 1 lan khi gia tri con dung
    let userNum = getUserNumber();
    if(userNum === randomNumber) {
        //Congrats
        console.log('Hooray :))')
        break;
    }
    guessingTime++;
} while (guessingTime < 3);

if(guessingTime === 3) {
    console.log("Chuc ban may man lan sau!!!");
} else {
    console.log("See u again!!!");
}
function getUserNumber() {
    return Number(readline.question('Please enter your number: '));
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}