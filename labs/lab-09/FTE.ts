// Full time employee class
import Employee from "./Employee";

// Full time employee class
export default class FullTimeEmployee extends Employee {
  getSalary(): number {
    return this.salary;
  }
}
