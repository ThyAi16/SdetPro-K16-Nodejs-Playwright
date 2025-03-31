import Employee from "./Employee";
import FullTimeEmployee from "./FTE";
import ContractEmployee from "./ContractEmployee";

// Function to calculate total salary
function calculateTotalSalary(employees: Employee[]): number {
  return employees.reduce((total, emp) => total + emp.getSalary(), 0);
}

// Function to get employee with highest and lowest salary
function getHighestAndLowestSalary(employees: Employee[]): {
  highest: Employee;
  lowest: Employee;
} {
  let highest = employees[0];
  let lowest = employees[0];

  for (const emp of employees) {
    if (emp.getSalary() > highest.getSalary()) {
      highest = emp;
    }
    if (emp.getSalary() < lowest.getSalary()) {
      lowest = emp;
    }
  }

  return { highest, lowest };
}

// Optional: Sort employees by salary, then name
function sortEmployees(employees: Employee[]): Employee[] {
  return employees.sort((a, b) => {
    if (a.getSalary() === b.getSalary()) {
      return a.name.localeCompare(b.name);
    }
    return a.getSalary() - b.getSalary();
  });
}

const employees: Employee[] = [
  new FullTimeEmployee("Thyai1", 50000),
  new FullTimeEmployee("Thyai2", 60000),
  new FullTimeEmployee("Thyai3", 70000),
  new ContractEmployee("Thyai4", 40000),
  new ContractEmployee("Thyai6", 30000),
];

const totalSalary = calculateTotalSalary(employees);
const { highest, lowest } = getHighestAndLowestSalary(employees);
const sorted = sortEmployees(employees);

// Output
console.log("Total Salary:", totalSalary);
console.log("Highest Paid:");
console.log(`--> ${highest.name}: ${highest.getSalary()}`);
console.log("Lowest Paid:");
console.log(`--> ${lowest.name}: ${lowest.getSalary()}`);
console.log("Sorted Employees:");
sorted.forEach((emp) => {
  console.log(`${emp.name}: ${emp.getSalary()}`);
});
