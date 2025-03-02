// Class: is a template/blueprint to built an object
// Class in JS only 1 Contrustor

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  // Getter: return current value
  get name() {
    return this._name;
  }

  // Setter: change current value
  set name(name) {
    this._name = name;
  }
}

let teo = new Person("Teo", 20); //Create 1 object from Contructor, Invoke Contructor to initialize an object from the class
teo.name = "Teo Ti";
let name = teo.name;
console.log(name);
