"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FTE_1 = require("./FTE");
var ContractEmployee_1 = require("./ContractEmployee");
// Function to calculate total salary
function calculateTotalSalary(employees) {
    return employees.reduce(function (total, emp) { return total + emp.getSalary(); }, 0);
}
// Function to get employee with highest and lowest salary
function getHighestAndLowestSalary(employees) {
    var highest = employees[0];
    var lowest = employees[0];
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var emp = employees_1[_i];
        if (emp.getSalary() > highest.getSalary()) {
            highest = emp;
        }
        if (emp.getSalary() < lowest.getSalary()) {
            lowest = emp;
        }
    }
    return { highest: highest, lowest: lowest };
}
// Optional: Sort employees by salary, then name
function sortEmployees(employees) {
    return employees.sort(function (a, b) {
        if (a.getSalary() === b.getSalary()) {
            return a.name.localeCompare(b.name);
        }
        return a.getSalary() - b.getSalary();
    });
}
var employees = [
    new FTE_1.default("Thyai1", 50000),
    new FTE_1.default("Thyai2", 60000),
    new FTE_1.default("Thyai3", 70000),
    new ContractEmployee_1.default("Thyai4", 40000),
    new ContractEmployee_1.default("Thyai6", 30000),
];
var totalSalary = calculateTotalSalary(employees);
var _a = getHighestAndLowestSalary(employees), highest = _a.highest, lowest = _a.lowest;
var sorted = sortEmployees(employees);
// Output
console.log("Total Salary:", totalSalary);
console.log("Highest Paid:");
console.log("--> ".concat(highest.name, ": ").concat(highest.getSalary()));
console.log("Lowest Paid:");
console.log("--> ".concat(lowest.name, ": ").concat(lowest.getSalary()));
console.log("Sorted Employees:");
sorted.forEach(function (emp) {
    console.log("".concat(emp.name, ": ").concat(emp.getSalary()));
});
