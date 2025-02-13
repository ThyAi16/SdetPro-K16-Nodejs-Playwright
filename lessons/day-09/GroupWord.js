const giveStr = "Hello u, I 'm Thy Ai";
let individualWords = giveStr.replace(/,/gi, "").split(" ");
const groupWords = groupWords(individualWords);
console.log(groupWords);

function groupWords(individualWords) {
    let wordMap = new Map();
    for (const word of individualWords) {
        if (!wordMap.has(word)) {
            wordMap.set(word);
        }
    }
}