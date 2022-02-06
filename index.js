// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
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
        message: "Choose a license for the project: ",
        name: "license",
        choices: ['No license', 'MIT', 'GNU APGL v3', 'Boost Software License 1.0', 'Apache 2.0 License'],
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! Your README.md file has been generated')
    );
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => writeToFile('./utils/README.md', markdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}
// Function call to initialize app
init();
