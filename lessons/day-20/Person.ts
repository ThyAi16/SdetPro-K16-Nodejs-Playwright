export default class Person {
  protected name: string;
  protected age: number;

  //Service method
  protected setAge(age: number) {
    this.validateAge(age);
    this.age = age;
  }

  // Support method
  private validateAge(age: number) {
    if (age < 0) {
      throw new Error("Age must be greater than 0");
    }
  }
}

// Private: Properties "private name: string;" is private and accessible within class "Person"
// Nếu Properties để private thì muốn dùng -> Sử sụng setName, setAge sẽ validate data
