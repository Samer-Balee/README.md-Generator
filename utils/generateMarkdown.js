// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}
  # Description
  ${data.description}
  # Tables of Contents
  * [Instalation](#instalation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Instalation
  ${data.instalation}
  # Usage
  ${data.usage}
  # Licence
  ${data.licence}
  # Contributing
  ${data.contribution}
  # Tests
  ${data.tests}
  # Questions
  My GitHub username: ${data.username}

  If you have any questions, please e-mail at ${data.email}
`;
}

module.exports = generateMarkdown;
