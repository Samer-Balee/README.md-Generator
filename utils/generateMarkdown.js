// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  let licenseBadge;
  switch(license) {
    case  'No license' :
      licenseBadge = '';
      break;
      case  'MIT' :
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;  
      case  'GNU APGL v3' :
        licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        break;  
      case  'Boost Software License 1.0' :
        licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        break;  
      case  'Apache 2.0 License' :
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case  'Mozilla Public License 2.0' :
        licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        break;
        default:
        console.log('Check your choice!');
  
  }
  return licenseBadge;
}

// Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
      case  'No license' :
        licenseLink = '';
      break;
      case  'MIT' :
        licenseLink = 'https://opensource.org/licenses/MIT';
        break;  
      case  'GNU APGL v3' :
        licenseLink = 'https://www.gnu.org/licenses/agpl-3.0';
        break;  
      case  'Boost Software License 1.0' :
        licenseLink = 'https://www.boost.org/LICENSE_1_0.txt';
        break;  
      case  'Apache 2.0 License' :
        licenseLink = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case  'Mozilla Public License 2.0' :
        licenseLink = 'https://opensource.org/licenses/MPL-2.0';
        break;
        default:
        console.log('Check your choice!');
  
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'No license'){
    return 'No license';
  } else {
    const licenseSection = `For information about this license visit: [${license}](${renderLicenseLink(license)})`;
    return licenseSection;
  }
}

//Create a function to generate markdown for README
function generateMarkdown({title , description , installation , usage ,license , contribution , tests , username , email }) {
  return `
  # ${title} ${renderLicenseBadge(license)}

  ## Description
   ${description}

  ## Tables of Contents
  * [Instalation](#instalation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
  ## Instalation
   ${installation}

  ## Usage
   ${usage}
  
  ## License
   ${renderLicenseSection(license)}

  ## Contributing
   ${contribution}

  ## Tests
   ${tests}

  ## Questions
  My GitHub link: [${username}](https://github.com/${username})

  If you have any questions, please e-mail me at ${email}
`;
}

module.exports = generateMarkdown;
