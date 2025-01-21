const readline = require('readline-sync');
let userNumber = GetUserNumber();

//1
// switch(userNumber) {
//     case 1:
//         console.log('No syntax');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Thursday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thu');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//     case 8:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Enter number error!!!')
// }

function GetUserNumber() {
    return Number(readline.question('Please enter Number: '));
}
//2
switch(userNumber) {
    case 1:
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
        console.log('Enter number error!!!')
}



