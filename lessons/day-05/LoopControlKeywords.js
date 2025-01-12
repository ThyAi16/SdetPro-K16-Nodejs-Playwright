// Continue: skip, Break: thoat
//1. Break

let array = [1, 2, 3, 4, 5];
let targetIndex = -1;
for(let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 3.5) {
        targetIndex = index;
        break;
    }
}
if (targetIndex < 0) {
    //console.log('No number found!');
} else {
    //console.log(`The number first found at index ${targetIndex}`);
}

//Continue
for(let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === 3) {
        continue;
    } else {
        //console.log(element);
}
}

// An array of POSITIVE interger number, numbers 3 among them.
// Increased up to 3 for the rest of number
increaseValues(array);
console.log(array);

function increaseValues(array) {
    for ( let index = 0; index < array.length; index++) {
        const value = array[index];
        if(value === 3) {
            continue;
        } else {
            array[index] = array[index] + 3;
        }
    }
}