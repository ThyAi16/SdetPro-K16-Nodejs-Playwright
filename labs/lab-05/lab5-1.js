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

//Method 1:
function wordFrequency(str) {
  let frequency = {};
  let words = str.replace(/[,?.!]/g, "").split(" ");

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
let words = str
  .toLowerCase()
  .replace(/[,?.!]/g, "")
  .split(" "); //Viet hoa và viet thuong dong nhat

//Method 2:
/**
 * 0. Process the given string -> [] object
 * 1. Init an object {}
 * 2. Loop over the givenStringArray
 *    if(initObj[word]) {
 *          initObj[word] = initObj[word] + 1
 * } else {
 *      initObj[word] = 1;
 * }
 */
const readline = require("readline-sync");
let giveString = getSentenceFromUser();
//let giveString = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
let individualword = giveString.replace(/,/gi, "").split(" ");
let groupWord = groupWordFromString(individualword);
console.log(groupWord);

function groupWordFromString(individualword) {
  const returnObj = {};
  for (const word of individualword) {
    if (returnObj[word]) {
      returnObj[word] = returnObj[word] + 1;
    } else {
      returnObj[word] = 1;
    }
  }
  return returnObj;
}

function getSentenceFromUser() {
  return readline.question("Enter a sentence: ");
}
