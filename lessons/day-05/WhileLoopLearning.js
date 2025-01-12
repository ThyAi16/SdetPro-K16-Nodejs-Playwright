//While loop: được dùng khi không xác định được số vòng lặp
//For loop: được dùng khi xác định được số vòng lặp
//-------------------------------------------------------------------
const readline = require('readline-sync');

let index = 0;
while ( index < 5) {
    //console.log(index);
    index++;
}

/**
 * --- LUCKY NUMBER GAME ---
 * 1. Guess a number
 * 0. Exist! 
 */
let isStillPlaying = true;
while(isStillPlaying) {
    prinrGameMenu();
    let userOption = getUserOption();
    if (userOption === 0) {
        //Conditional change trigger
        isStillPlaying = false;
    } else if (userOption === 1) {
      let randomNumber = Math.floor(Math.random() * 10) + 1;
      console.log(`Lucky number: ${randomNumber}`);

    } else {
        console.log('Nhap ....');
    }
}
console.log('See you again');

function prinrGameMenu() {
    console.log(`
/**
 * --- LUCKY NUMBER GAME ---
 * 1. Generate a random number
 * 0. Exist! 
 */
        `);
}
function getUserOption() {
    return Number(readline.question('Please input your option: '));
}
