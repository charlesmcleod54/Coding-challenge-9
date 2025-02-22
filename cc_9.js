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

// Task 2: Creating a Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    getDetails() {
        return 'Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}';
    }
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1; // 10% of annual salary
    }
}

// Test case
const mgr1 = new Manager("Will Johnson", 231, "IT", 10000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

// Task 3: Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.getDetails());
        });
    }
    calculateTotalPayroll() {
        let totalPayroll = 0;
        this.employees.forEach(employee => {
            totalPayroll += employee.calculateAnnualSalary();
            if (employee instanceof Manager) {
                totalPayroll += employee.calculateBonus();
            }
        });
        return totalPayroll;
    }
    promoteToManager(employee, teamSize) {
        const newManager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
        this.employees = this.employees.filter(emp => emp !== employee);
        this.addEmployee(newManager);
    }
}

// Test case
const company = new Company("Smith Athletics");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

// Task 4: Implementing a Payroll System
console.log(company.calculateTotalPayroll());

// Task 5: Implementing Promotions
company.promoteToManager(emp1, 3);
company.listEmployees();
