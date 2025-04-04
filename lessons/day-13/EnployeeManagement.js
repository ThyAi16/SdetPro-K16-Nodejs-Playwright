const Employee = require("./Employee");
const SalaryController = require("./SalaryController");

//Create Data | OOP
let thy = new Employee("Thy", 200);
let ai = new Employee("Ai", 240);

//Init controller, process user-defined data | FP
let salaryController = new SalaryController();

//Get the evaluated result
const totalSalary = salaryController.getTotalSalary([thy, ai]);
console.log(totalSalary);
