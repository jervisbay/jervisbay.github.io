// npm package requires
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const replace = require('replace-in-file');
const open = require("open");
const generateInitialHTML = require("./generateInitialHTML");

const writeFileASync = util.promisify(fs.writeFile);

// define single question to ask for user / manager's name
const managerQuestion = [{
    type: "input",
    name: "managerName",
    message: "What is your name?",
}];

// define questions to ask for number of team members and team member roles
const teamQuestions = [{
    type: "list",
    name: "additionalEmployee",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Intern", "That's the team!"],
}, ];

const removeEndBodyTag = {
    files: "./index.html",
    from: "</body>",
    to: "",
};

const removeEndHTMLTag = {
    files: "./index.html",
    from: "</html>",
    to: "",
};

// define classes and extensions
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

// define array to store team members, will push items into this array
const teamMembers = [];

// define function to ask for manager name and create initial HTML document
async function askForManager() {
    const managerAnswer = await inquirer.prompt(managerQuestion);
    console.log(managerAnswer.managerName);
    const indexHTML = generateInitialHTML(managerAnswer);
    // write initial HTML file
    await writeFileASync("index.html", indexHTML)
        .then(console.log("Wrote initial HTML page!"))
        .then(replaceTextinHTML())
        .then(console.log("Removed end tags - ready to edit!"))
};

async function replaceTextinHTML() {
    try {
        await replace(removeEndBodyTag)
            .then((results) => { replace(removeEndHTMLTag) });
    } catch (error) {
        console.log(error);
    }
};


// define funtion to ask for team members and then append to initial HTML document already created
async function askForTeamMembers() {
    // get inquirer prompt response
    const teamMemberAnswer = await inquirer.prompt(teamQuestions);
    // if prompt response is engineer or intern, add to teamMembers array and ask question again
    switch (teamMemberAnswer.additionalEmployee) {
        case "Engineer":
            console.log("Added an Engineer!")
            askForTeamMembers();
            break;
        case "Intern":
            console.log("Added an Intern!")
            askForTeamMembers();
            break;
        case "That's the team!":
            console.log("No more team members")
            break;
    }

}

async function init() {

    await askForManager();
    // await replaceTextinHTML();
    await askForTeamMembers();


}

init();

// open file --> this should move to askforteammembers function
// open("index.html");