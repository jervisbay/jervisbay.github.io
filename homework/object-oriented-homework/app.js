// npm package requires
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const replace = require('replace-in-file');
const open = require("open");
const generateMarkUp = require("./generatemarkup");
const generateEngineerMarkUp = require("./generateengineermarkup");
const generateInternMarkUp = require("./generateinternmarkup");
const employeeClasses = require("./employee");
const questions = require("./questions");

const writeFileASync = util.promisify(fs.writeFile);

const Employee = employeeClasses.Employee;
const Engineer = employeeClasses.Engineer;
const Intern = employeeClasses.Intern;
const Manager = employeeClasses.Manager;

const managerQuestions = questions.managerQuestions;
const teamQuestions = questions.teamQuestions;
const engineerQuestions = questions.engineerQuestions;
const internQuestions = questions.internQuestions;

// define parameters to replace
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
const allEmployees = [];
const allManagers = [];
const allEngineers = [];
const allInterns = [];

function printOutTeam() {
    console.log("No more team members")
    console.log("----- Employees -----")
    console.log(allEmployees);
    console.log("----- Managers -----")
    console.log(allManagers);
    console.log("----- Engineers -----")
    console.log(allEngineers);
    console.log("----- Interns -----")
    console.log(allInterns);
}

// define function to ask for manager name and create initial HTML document
async function askForManager() {
    const managerAnswer = await inquirer.prompt(managerQuestions);
    const managerOne = new Manager(managerAnswer.managerName, managerAnswer.managerID, managerAnswer.managerEmail, managerAnswer.managerPhoneNumber);
    allEmployees.push(managerOne);
    allManagers.push(managerOne);
    const indexHTML = generateMarkUp(managerAnswer);
    // write initial HTML file
    await writeFileASync("index.html", indexHTML)
        .then(console.log("Wrote initial HTML page!"))
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
            replaceTextinHTML();
            const engineerAnswer = await inquirer.prompt(engineerQuestions);
            const engineerOne = new Engineer(engineerAnswer.engineerName, engineerAnswer.engineerID, engineerAnswer.engineerEmail, engineerAnswer.engineerGithub);
            allEmployees.push(engineerOne);
            allEngineers.push(engineerOne);
            const additionalEngineerHTML = generateEngineerMarkUp(engineerAnswer);
            await fs.appendFile("index.html", additionalEngineerHTML, (err) => {
                if (err) throw err;
                console.log("Added an Engineer!");
            })
            askForTeamMembers();
            break;

        case "Intern":
            replaceTextinHTML();
            const internAnswer = await inquirer.prompt(internQuestions);
            const internOne = new Intern(internAnswer.internName, internAnswer.internID, internAnswer.internEmail, internAnswer.internSchool);
            allEmployees.push(internOne);
            allInterns.push(internOne);
            const additionalInternHTML = generateInternMarkUp(internAnswer);
            await fs.appendFile("index.html", additionalInternHTML, (err) => {
                if (err) throw err;
                console.log("Added an Intern!");
            })
            askForTeamMembers();
            break;

        case "That's the team!":
            printOutTeam();
            break;
    }
}

async function init() {
    await askForManager();
    await askForTeamMembers();
    open("index.html");
}

init();