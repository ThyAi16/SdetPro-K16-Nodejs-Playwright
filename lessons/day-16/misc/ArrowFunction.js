// 1. Type: Function Declaration
function add(a, b) {
  return a + b;
}

// 2. Type: Function Expression
const add_ = function (a, b) {
  return a + b;
};

// 3. Type: Arrow Function
const arrowAddNumbers1 = (a, b) => {
  return a + b;
};

// Return
const arrowAddNumbers2 = (a, b) => a + b;

//Print
const arrowAddNumber1 = (a, b) => console.log(a + b);

const arrowAddNumber2 = (a) => console.log(a);

// Lexical this binding

// Object literal

const person = {
  name: "Lisa",
  age: "25",
  saHello: function () {
    setTimeout(function () {
      console.log(`Hello, my name is ${this.name}, 2 * 1000`);
    });
  },
};
person.saHello();

// Use Arrow function: Lexical this binding
const person_ = {
  name: "Lisa",
  age: "25",
  saHello: function () {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}, 2 * 1000`);
    });
  },
};
person_.saHello();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumber = array.filter((num) => num % 2 !== 0);
console.log(oddNumber);
