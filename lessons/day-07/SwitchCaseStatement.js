const readline = require('readline-sync');

let userNum = getUserNumber();

// switch(userNum) {
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wed');
//         break;
//     case 5:
//         console.log('Thu');
//         break;
//     case 6:
//         console.log('Fri');
//         break;
//     case 7:
//         console.log('Sat');
//         break;
//     case 8:
//         console.log('Sun');
//         break;
//     default:
//         console.log('Enter error!!!')
// }
switch(userNum) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('Weekdays');
        break;
    case 7:
    case 8:
        console.log('Weekends');
        break;
    default:
        console.log('Enter error!!!')
}

function getUserNumber() {
    return Number(readline.question('Please enter your Number: '));
}