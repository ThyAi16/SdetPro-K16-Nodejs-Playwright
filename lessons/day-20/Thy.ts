import Person from "./Person";

export default class Thy extends Person {
  setAge(age: number): void {
    if (age < 18) {
      throw new Error("Thy is not allowed to have less than 18 year old");
    }
    this.age = age;
  }
}
