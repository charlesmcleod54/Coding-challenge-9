// Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    getDetails() {
        return 'Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}';
    }
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Test case
const emp1 = new Employee("John Allen", 123, "Sales", 7500);
console.log(emp1.getDetails()); // "Employee: John Allen, ID: 123, Department: Sales, Salary: $7500"
console.log(emp1.calculateAnnualSalary());
