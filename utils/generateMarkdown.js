// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Description
   ${data.description}
  ## Tables of Contents
  * [Instalation](#instalation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Instalation
   ${data.installation}
  ## Usage
   ${data.usage}
  ## Licence
   ${data.license}
  ## Contributing
   ${data.contribution}
  ## Tests
   ${data.tests}
  ## Questions
  My GitHub link: [${data.username}](https://github.com/${data.username})

  If you have any questions, please e-mail me at ${data.email}
`;
}

module.exports = generateMarkdown;
