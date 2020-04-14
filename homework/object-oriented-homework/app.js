// npm package requires
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileASync = util.promisify(fs.writeFile);
const replace = require('replace-in-file');
const open = require("open");
const generateMarkUp = require("./generatemarkup");
const generateEngineerMarkUp = require("./generateengineermarkup");
const generateInternMarkUp = require("./generateinternmarkup");
const replaceTextinHTML = require("./replacetextinhtml");

// getting classes and constructors
const employeeClasses = require("./employee");
const Employee = employeeClasses.Employee;
const Engineer = employeeClasses.Engineer;
const Intern = employeeClasses.Intern;
const Manager = employeeClasses.Manager;

// getting inquirer questions
const questions = require("./questions");
const managerQuestions = questions.managerQuestions;
const teamQuestions = questions.teamQuestions;
const engineerQuestions = questions.engineerQuestions;
const internQuestions = questions.internQuestions;

// define array to store team members, will push items into these arrays later
const allEmployees = [];
const allManagers = [];
const allEngineers = [];
const allInterns = [];

// define function to console log all the employees created
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
    // get response from inquirer prompt
    const managerAnswer = await inquirer.prompt(managerQuestions);
    // create new manager
    const managerOne = new Manager(managerAnswer.managerName, managerAnswer.managerID, managerAnswer.managerEmail, managerAnswer.managerPhoneNumber);
    // push created manager to employees array and manager array
    allEmployees.push(managerOne);
    allManagers.push(managerOne);
    // generate initial HTML markup
    const indexHTML = generateMarkUp(managerAnswer);
    // write the generated initial HTML markup into an index.html file
    await writeFileASync("index.html", indexHTML)
        .then(console.log("Wrote initial HTML page!"))
};

// define funtion to ask for team members and then append to initial HTML document already created
async function askForTeamMembers() {
    // get response from inquirer prompt
    const teamMemberAnswer = await inquirer.prompt(teamQuestions);
    // if prompt response is engineer or intern, add to respective array and ask question again
    switch (teamMemberAnswer.additionalEmployee) {
        // if added team member is an Engineer...
        case "Engineer":
            // remove bottom tags on the initial generated HTML markup    
            replaceTextinHTML();

            // get response from inquirer prompt and create new Engineer with responses
            const engineerAnswer = await inquirer.prompt(engineerQuestions);
            const engineerOne = new Engineer(engineerAnswer.engineerName, engineerAnswer.engineerID, engineerAnswer.engineerEmail, engineerAnswer.engineerGithub);
            // push created Engineer to respective arrays
            allEmployees.push(engineerOne);
            allEngineers.push(engineerOne);
            // generate the HTML to be appended to index.html
            const additionalEngineerHTML = generateEngineerMarkUp(engineerAnswer);
            // append to index.html
            await fs.appendFile("index.html", additionalEngineerHTML, (err) => {
                    if (err) throw err;
                    console.log("Added an Engineer!");
                })
                // ask if there are more team members to be added
            askForTeamMembers();
            break;

            // if added team member is an Engineer...
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

            // if there are no more team members...
        case "That's the team!":
            // console log all the employees    
            await printOutTeam();
            await fs.appendFile("index.html", "</html>", (err) => {
                    if (err) throw err;
                })
                // open the generated index.html file
            open("index.html");
            break;
    }
}

// program flow
async function init() {
    await askForManager();
    await askForTeamMembers();
}

init();