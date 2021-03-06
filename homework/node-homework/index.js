// const api = require("./utils/api");
// const path = require("path");

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const open = require("open");
const util = require("util");
const axios = require("axios");

// Question object to be passed into inquirer.prompt method
const questions = [{
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "Project-1"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a short description of your project",
        default: "This is going to be a cool project"
    },
    {
        type: "input",
        name: "installation",
        message: "What command is required to install the package?",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "How would you use the project?"
    },
    {
        type: "list",
        name: "license",
        message: "What licenses are required?",
        choices: ["MIT", "The Unlicense", "zLib License", "ISC", "Apache", "BSD"],
    },
    {
        type: "list",
        name: "contributing",
        message: "Who contributed to the project?",
        choices: ["Just Me!", "Me and Others", "Mainly Others"],
    },
    {
        type: "input",
        name: "tests",
        message: "What command is required to run tests?",
        default: "npm run test",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address for questions?",
        default: "username@gmail.com"
    },
];


const writeFileASync = util.promisify(fs.writeFile);
const fileName = "readme.md";

// Program flow activated by init()
async function init() {

    try {
        // Call inquirer prompts and await answers
        const inquirerAnswers = await inquirer.prompt(questions);

        // Create queryURL for axios call to the github API
        const queryUrl = `https://api.github.com/users/${inquirerAnswers.username}`;

        // Get user picture URL from the github axios call
        try {
            const userPicture = await axios.get(queryUrl)
                .then(function(res) { return res.data.avatar_url })

            // Add this URL to the inquirerAnswers object
            inquirerAnswers.picture = userPicture;
        } catch (err) {
            throw "Username not found.  Please try again."
        };

        // Pass answers from inquirer prompt into the generateMarkdown
        const readme = generateMarkdown(inquirerAnswers);

        // Write readme file with generateMarkdown
        await writeFileASync(fileName, readme);
        console.log("Wrote README!");

    } catch (err) {
        console.log(err);
    }
}

// Call function to start
init();