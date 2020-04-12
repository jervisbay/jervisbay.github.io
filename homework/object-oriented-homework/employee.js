class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(this.name);
    }
    getId() {
        console.log(this.id);
    }
    getEmail() {
        console.log(this.email);
    }
    getRole() {
        console.log("Employee");
    }
};

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getRole() {
        console.log("Engineer");
    }
    getGithub() {
        console.log(this.github);
    }
};

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getRole() {
        console.log("Intern");
    }
    getSchool() {
        console.log(this.school);
    }
};

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        console.log("Manager");
    }
};

module.exports = { Employee: Employee, Engineer: Engineer, Manager: Manager, Intern: Intern }