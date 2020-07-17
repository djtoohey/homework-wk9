const generateLicense = require("./generateLicense.js");

// function to generate markdown for README
function generateMarkdown(data) {
    const license = generateLicense(data);
    return `
# ${data.title}
    ${data.description}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Installation:
    ${data.install}
    
## Usage
${data.usage}
    
## License
${license}
    
## Contributing
${data.contributing}
    
## Tests
${data.tests}
    
## Questions
GitHub: https://www.github.com/${data.ghUsername}/
    
Email: ${data.email}`;
}

module.exports = generateMarkdown;
