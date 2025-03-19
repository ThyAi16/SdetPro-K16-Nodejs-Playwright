// Support function

// number: parameter
function isEvenNumber(number) {
  //Detail implementation
  return number + 2;
}

// number: parameter
const isOddNumber = function (number) {
  return number % 2 !== 0;
};

// Common JS module

module.exports = {
  teo: isEvenNumber,
  ti: isOddNumber,
};

// User Arrow function
const isOddNumber_ = (number) => number % 2 !== 0;

// Common JS module
module.exports = {
  tii: isOddNumber_,
};
