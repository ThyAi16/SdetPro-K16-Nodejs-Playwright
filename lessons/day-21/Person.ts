export default class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setName(name: string) {
    this.name = name;
  }

  setAge(age: number) {
    this.age = age;
  }
}

// teo is a immutable object || Read only
let tao = new Person("Teo", 20);

// Read only: la 1 mute object
