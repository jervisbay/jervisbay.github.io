const employeeClasses = require("../employee");
const Employee = employeeClasses.Employee;
const Engineer = employeeClasses.Engineer;
const Intern = employeeClasses.Intern;
const Manager = employeeClasses.Manager;

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new employee", () => {
            const testEmployee = new Employee("Waffles", 1, "waffles@gmail.com");

            expect(testEmployee.name).toEqual("Waffles");
            expect(testEmployee.id).toEqual(1);
            expect(testEmployee.email).toEqual("waffles@gmail.com");
        });
    });
});