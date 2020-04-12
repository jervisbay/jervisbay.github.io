// define questions to ask for user / manager's name
const managerQuestions = [{
        type: "input",
        name: "managerName",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "managerID",
        message: "What is your ID number?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "managerPhoneNumber",
        message: "What is your office number?",
    },
];

const teamQuestions = [{
    type: "list",
    name: "additionalEmployee",
    message: "Would you like to add another team member?",
    choices: ["Engineer", "Intern", "That's the team!"],
}];

const engineerQuestions = [{
        type: "input",
        name: "engineerName",
        message: "What is his/her's name?",
    },
    {
        type: "input",
        name: "engineerID",
        message: "What is his/her's ID number?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is his/her's email address?",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is his/her's Github username?",
    }
];

const internQuestions = [{
        type: "input",
        name: "internName",
        message: "What is his/her's name?",
    },
    {
        type: "input",
        name: "internID",
        message: "What is his/her's ID number?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is his/her's email address?",
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is his/her's school?",
    }
];

module.exports = {
    managerQuestions: managerQuestions,
    teamQuestions: teamQuestions,
    engineerQuestions: engineerQuestions,
    internQuestions: internQuestions,
};