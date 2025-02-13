/*
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
*/

function wordFrequency(str) {
    let frequency = {};
    let words = str.replace(/[,?.!]/g, '').split(' ');
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        frequency[word] = (frequency[word] || 0) + 1;
    }
    return frequency;
}

let input = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
let result = wordFrequency(input);

for (let word in result) {
    console.log(`${word}: ${result[word]}`);
}
//let words = str.toLowerCase().replace(/[,?.!]/g, '').split(' '); //Viet hoa và viet thuong dong nhat