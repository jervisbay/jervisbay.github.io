const employeeClasses = require("../employee");
const Employee = employeeClasses.Employee;
const Engineer = employeeClasses.Engineer;
const Intern = employeeClasses.Intern;
const Manager = employeeClasses.Manager;

const testEmployee = new Employee("Waffles", 1, "waffles@gmail.com");
const testManager = new Manager("Waffles", 1, "waffles@gmail.com", 123456);
const testEngineer = new Engineer("Waffles", 1, "waffles@gmail.com", "wafflesgit");
const testIntern = new Intern("Waffles", 1, "waffles@gmail.com", "UVA");

describe("Employee", () => {
    describe("Initialization / Creating New Classes", () => {
        it("should create a new employee", () => {
            expect(testEmployee.name).toEqual("Waffles");
            expect(testEmployee.id).toEqual(1);
            expect(testEmployee.email).toEqual("waffles@gmail.com");
        });
        it("should create a new manager", () => {
            expect(testManager.name).toEqual("Waffles");
            expect(testManager.id).toEqual(1);
            expect(testManager.email).toEqual("waffles@gmail.com");
            expect(testManager.officeNumber).toEqual(123456);
        });
        it("should create a new engineer", () => {
            expect(testEngineer.name).toEqual("Waffles");
            expect(testEngineer.id).toEqual(1);
            expect(testEngineer.email).toEqual("waffles@gmail.com");
            expect(testEngineer.github).toEqual("wafflesgit");
        });
        it("should create a new intern", () => {
            expect(testIntern.name).toEqual("Waffles");
            expect(testIntern.id).toEqual(1);
            expect(testIntern.email).toEqual("waffles@gmail.com");
            expect(testIntern.school).toEqual("UVA");
        });
    });

    // test that these methods actually console.log the right thing
    describe("Testing methods for created Classes", () => {
        it("should get respective attributes", () => {
            const mock = jest.spyOn(console, "log");
            testEmployee.getRole();
            expect(mock).toBeCalledWith("Employee");
            mock.mockRestore();
        });
    });








});