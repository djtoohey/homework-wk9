const generateLicence = require("./generateLicence.js");

// function to generate markdown for README
function generateMarkdown(data) {

    const licence = generateLicence(data);
    return `
# ${data.title}
${licence.badge}

${data.description}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Licence](#licence)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Installation:
    ${data.install}
    
## Usage
${data.usage}
    
## Licence
This project is licensed under the terms of the ${licence.licenceName}.

    
## Contributing
${data.contributing}
    
## Tests
${data.tests}
    
## Questions
GitHub: https://www.github.com/${data.ghUsername}/
    
Email: ${data.email}`;
}

module.exports = generateMarkdown;
