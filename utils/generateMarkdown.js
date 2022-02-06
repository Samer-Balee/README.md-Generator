// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// license Badges
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
//[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
//[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


// license links
//https://choosealicense.com/licenses/mit/
//https://choosealicense.com/licenses/agpl-3.0/
//https://choosealicense.com/licenses/bsl-1.0/
//https://choosealicense.com/licenses/apache-2.0/


//const userChoices = ['No license' , 'MIT' , 'GNU APGL v3' , 'Boost Software License 1.0' , 'Apache 2.0 License'],

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
        default:
        console.log('Check your choice!');
  
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
      case  'No license' :
        licenseLink = '';
      break;
      case  'MIT' :
        licenseLink = 'https://choosealicense.com/licenses/mit/';
        break;  
      case  'GNU APGL v3' :
        licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
        break;  
      case  'Boost Software License 1.0' :
        licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
        break;  
      case  'Apache 2.0 License' :
        licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
        break;
        default:
        console.log('Check your choice!');
  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title , description , installation , usage ,license , licenseBadge , licenseLink , contribution , tests , username , email }) {
  console.log(licenseBadge);
  console.log(licenseLink);
  console.log(license);

  renderLicenseSection(license);
  return `
  # ${title} ${licenseBadge}
  ## Description
   ${description}
  ## Tables of Contents
  * [Instalation](#instalation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Instalation
   ${installation}
  ## Usage
   ${usage}
  ## Licence
  ${licenseBadge} \n Link to license information ${licenseLink}
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
