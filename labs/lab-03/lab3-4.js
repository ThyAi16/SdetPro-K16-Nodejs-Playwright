let foo = [1, 12, 16, 28, 34];
let bar = [1, 13, 16, 27, 99];
let mergeArr = [];

let fooPosition = 0;
let barPosition = 0;
const fooLength = foo.length;
const barLength = bar.length;

//Methods 1:
// while (fooPosition < fooLength && barPosition < barLength) {
//     let fooValue = foo[fooPosition];
//     let barValue = bar[barPosition];
//     if(fooValue <= barValue) {
//         mergeArr.push(fooValue);
//         fooPosition++;
//     } else {
//         mergeArr.push(barValue);
//         barPosition++;

//     }
// }
// //Neu con phan element thi doan code code duoi nay moi thuc thi
// while(fooPosition < fooLength) {
//     mergeArr.push(foo[fooPosition]);
//     fooPosition++;
//     console.log(fooPosition);
// }
// while(barPosition < barLength) {
//     mergeArr.push(bar[barPosition]);
//     barPosition++;
//     console.log("Bar: ", barPosition);
// }
// console.log(`Merger Array: ${mergeArr}`);

//Methods 2:
while (fooStillHaveElement() && barStillHaveElement()) {
    let fooValue = foo[fooPosition];
    let barValue = bar[barPosition];   
    if(fooValue <= barValue) {
        mergeArr.push(fooValue);
        fooPosition++;
    } else {
        mergeArr.push(barValue);
        barPosition++;
    }
}
//Neu con phan element thi doan code code duoi nay moi thuc thi
while(fooPosition < fooLength) {
    mergeArr.push(foo[fooPosition]);
    fooPosition++;
    console.log(fooPosition);
}
while(barPosition < barLength) {
    mergeArr.push(bar[barPosition]);
    barPosition++;
}
function fooStillHaveElement() {
    return fooPosition < fooLength;
}
function barStillHaveElement() {
    return barPosition < barLength;
}
console.log(`Merger Array: ${mergeArr}`);

