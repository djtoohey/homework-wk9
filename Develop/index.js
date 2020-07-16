const fs = require("fs");
const genMD = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const util = require("util");
const generateLicense = require("./generateLicense.js");

const asyncWriteFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        name: "title",
        type: "input",
        message: "Title: "
    },
    {
        name: "description",
        type: "input",
        message: "Description: ",
    },
    {
        name: "install",
        type: "input",
        message: "Installation: ",
    },
    {
        name: "usage",
        type: "input",
        message: "Usage: ",
    },
    {
        name: "license",
        type: "list",
        message: "License: ",
        choices:
            [
                "MIT",
                "GNU General Public License v3.0",
                "Unlicense",
            ],
    },
    {
        name: "contributing",
        type: "input",
        message: "Contributing: ",
    },
    {
        name: "tests",
        type: "input",
        message: "Tests: ",
    },
    {
        name: "ghUsername",
        type: "input",
        message: "Github Username: ",
    },
    {
        name: "email",
        type: "input",
        message: "Contact Email: ",
    },
    {
        name: "fullname",
        type: "input",
        message: "Name: ",
    },
    {
        name: "year",
        type: "number",
        message: "Current Year: ",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    asyncWriteFile(fileName, data).then(() => console.log("success?"));

}

// function to initialize program
function init() {
    // console.log(genMD.generateMarkdown = "test");
    inquirer.prompt(questions).then(function (data = { title, description, install, usage, license, contributing, tests, ghUsername, email, fullname, year }) {
        license = generateLicense(data);
        const readme =
            `# ${data.title}
            

${data.description}

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

Email: ${data.email}
        `
        writeToFile("test.md", readme);


    })

}

// function call to initialize program
init();
