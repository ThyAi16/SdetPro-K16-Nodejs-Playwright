// Class: is a template/blueprint to built an object
// Class in JS only 1 Contrustor
// JV has multiple constructor, but JS has a constructor

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter: return current value
  get name() {
    return this._name;
  }

  // Setter: change current value of properties
  set name(name) {
    this._name = name;
  }
}

// Create 1 object from Contructor, Invoke Constructor to initialize/create an object from the class
let teo = new Person("Teo", 20);
teo.name = "Teo Ti";
let name = teo.name;
console.log(name);

// Example:
const obj = {
  n: "ai",
  a: "20",
};
let n = obj.n;
obj.a = "24";
let a = obj.a;
// console.log(n);
// console.log(a);
