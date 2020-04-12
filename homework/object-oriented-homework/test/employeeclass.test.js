const employeeClasses = require("../employee");
const Employee = employeeClasses.Employee;
const Engineer = employeeClasses.Engineer;
const Intern = employeeClasses.Intern;
const Manager = employeeClasses.Manager;

describe("Employee", () => {
    describe("Initialization / Creating New Classes", () => {
        it("should create a new employee", () => {
            const testEmployee = new Employee("Waffles", 1, "waffles@gmail.com");
            expect(testEmployee.name).toEqual("Waffles");
            expect(testEmployee.id).toEqual(1);
            expect(testEmployee.email).toEqual("waffles@gmail.com");
        });
        it("should create a new manager", () => {
            const testManager = new Manager("Waffles", 1, "waffles@gmail.com", 123456);
            expect(testManager.name).toEqual("Waffles");
            expect(testManager.id).toEqual(1);
            expect(testManager.email).toEqual("waffles@gmail.com");
            expect(testManager.officeNumber).toEqual(123456);
        });
        it("should create a new engineer", () => {
            const testEngineer = new Engineer("Waffles", 1, "waffles@gmail.com", "wafflesgit");
            expect(testEngineer.name).toEqual("Waffles");
            expect(testEngineer.id).toEqual(1);
            expect(testEngineer.email).toEqual("waffles@gmail.com");
            expect(testEngineer.github).toEqual("wafflesgit");
        });
        it("should create a new intern", () => {
            const testIntern = new Intern("Waffles", 1, "waffles@gmail.com", "UVA");
            expect(testIntern.name).toEqual("Waffles");
            expect(testIntern.id).toEqual(1);
            expect(testIntern.email).toEqual("waffles@gmail.com");
            expect(testIntern.school).toEqual("UVA");
        });
    });








});