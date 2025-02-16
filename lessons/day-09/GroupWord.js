const giveStr = "Hello u, I 'm Thy Ai, Thank u";
let individualWords = giveStr.replace(/,/gi, "").split(" ");
//console.log(individualWords);
const groupWords = groupWord(individualWords);
console.log(groupWords);

/**
 * "Hello u, I 'm Thy Ai, Thank u"
 * Hello: 1
 * u: 2
 * 
 */

function groupWord(individualWords) {
    let wordMap = new Map();
    for (const word of individualWords) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 1);
        } else {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }
    return wordMap;
}

// const ws = ['apple', 'banana', 'apple, cherry'];
// const result = groupw(ws);
// console.log(result);