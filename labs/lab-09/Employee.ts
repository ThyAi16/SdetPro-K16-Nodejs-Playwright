// Abstract class
export default abstract class Employee {
  public name: string;
  protected salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  abstract getSalary(): number;
}
