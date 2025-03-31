// Contract employee class
import Employee from "./Employee";

// Contract employee class
export default class ContractEmployee extends Employee {
  getSalary(): number {
    return this.salary;
  }
}
