# README.md Generator

## Description

A node.js application that uses user input from inquirer to populate a README.md file for user repository. 
The README.md file is created in the [dist](./assets/dist) directory.
You can quickly and easily create a README file by using a command-line application to generate one.
 This allows the project creator to devote more time to working on the project.

 Steps that have been done to get the result:
 * Instal inquirer package using npm instal comand in terminal.
 * Include packages needed for this application.
 * Create an array of questions for user input.
 * Create a function to generate markdown for README.
 * Create a function to initialize app.
 * Create a function to write README file.
 * Create a function that returns a license badge based on which license is passed in.
 * Create a function that returns the license link.
 * Create a function that returns the license section of README.

## Tables of Contents

* [Instalation](#instalation)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Technologies](#technologies)
* [Usage](#usage)


## Instalation

GitHub link : [Samer-Balee](https://github.com/Samer-Balee/README.md-Generator).

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
## Technologies

* JavaScript
* NodeJs
* NPM
* Markdown


## Usage

* Including packages needed for this application and array of questions for user input:


* Creating a function to generate markdown for README:


* Create a function to initialize app and a function to write README file:


* Creating a function that returns the license link and Creating a function that returns the license section of README:


* Runing the app in terminal:



