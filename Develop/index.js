const fs = require("fs");
const genMD = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const util = require("util");

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
        let license = ""
        if (data.license === "MIT") {
            license = `MIT License

            Copyright (c)  ${data.year} ${data.fullname}
            
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.`
        }
        else if (data.license === "GNU General Public License v3.0)") {
            license = `GNU LICENSE`

        }

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
