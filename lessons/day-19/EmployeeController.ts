import Employee from "./Employee";

// FP
export default class EmployeeController {
  static getTotalSalary(EmployeeList: Employee[]): number {
    let totalSalary = 0;
    for (const emp of EmployeeList) {
      totalSalary = totalSalary + emp.getSalary() + emp.getBonus();
    }
    return totalSalary;
  }
}
