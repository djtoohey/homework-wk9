const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const util = require("util");
const generateLicence = require("./utils/generateLicence.js");
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
        name: "licence",
        type: "list",
        message: "Licence: ",
        choices:
            [
                "MIT",
                "GNU General Public License v3.0",
                "Unlicence",
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
];

// function to write README file
function writeToFile(fileName, data) {
    asyncWriteFile(fileName, data).then(() =>
        console.log(`Ctrl + click -> Develop/README.md to see your generated file.
        [Suggestion: May want to add images to the Readme to improve understanding of your project]`));

}

// function to initialize program
function init() {
    // console.log(genMD.generateMarkdown = "test");
    inquirer.prompt(questions).then(function (data = { title, description, install, usage, licence, contributing, tests, ghUsername, email, fullname, year }) {

        const readme = generateMarkdown(data);

        writeToFile("README.md", readme);


    })

}

// function call to initialize program
init();
