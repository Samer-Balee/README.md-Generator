// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a short project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the installation Instructions: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the usage information: ",
        name: "usage"

    },
    {
        type: "input",
        message: "Enter contribution guidelines: ",
        name: "contribution"

    },
    {
        type: "list",
        message: "Choose a licence for the project: ",
        name: "licence",
        Choices: ['' , '' , ''],
    },
    {
        type: "input",
        message: "Enter your Github username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your Email address: ",
        name: "email"
    }, 
    {
        type: "input",
        message: "Enter any tests you are running for your project: ",
        name: "tests"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
