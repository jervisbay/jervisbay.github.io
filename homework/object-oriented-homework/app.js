// npm package requires
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const replace = require('replace-in-file');
const open = require("open");
const generateMarkUp = require("./generatemarkup");
const generateEngineerMarkUp = require("./generateengineermarkup");
const Employee = require("./employee");


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

const removeEndHTMLTag = {
    files: "./index.html",
    from: "</html>",
    to: "",
};

const removeEndDivTag = {
    files: "./index.html",
    from: "</div end>",
    to: "",
};

// define array to store team members, will push items into this array
const teamMembers = [];

// define function to ask for manager name and create initial HTML document
async function askForManager() {
    const managerAnswer = await inquirer.prompt(managerQuestion);
    const indexHTML = generateMarkUp(managerAnswer);
    // write initial HTML file
    await writeFileASync("index.html", indexHTML)
        .then(console.log("Wrote initial HTML page!"))
        .then(replaceTextinHTML())
        .then(console.log("Removed end tags - ready to edit!"))
};

async function replaceTextinHTML() {
    try {
        await replace(removeEndHTMLTag)
            .then((results) => { replace(removeEndDivTag) });
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
            const additionalHTML = generateEngineerMarkUp(teamMemberAnswer);
            await fs.appendFile("index.html", additionalHTML, (err) => {
                if (err) throw err;
                console.log("Added an Engineer!");
            })

            // askForTeamMembers();
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
    await askForTeamMembers();

}

init();

// const waffles = new Employee("Waffles", 0, "gmail");
// console.log(waffles);

// const waffles2 = new Engineer("Waffles", 0, "gmail", "wafflesgit");
// console.log(waffles2);