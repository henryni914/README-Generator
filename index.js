const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "title",
            message: "Please enter the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter your description here:"
        },
        {
            type: "input",
            name: "installation",
            message: "Enter any installation instructions here:"
        },
        {
            type: "input",
            name: "usage",
            message: "Enter any usage instructions here:"
        },
        {
            type: "list",
            name: "license",
            message: "Which license?",
            choices: ["MIT", "None"]
        },
        {
            type: "input",
            name: "contributor",
            message: "Enter any contributors here:"
        },
    ]).then(function (response) {
        console.log(response.title);
        const title = "# " + response.title;
        const description = "## Description" + '\n' + response.description;
        const table = "## Table" + '\n';
        const installation = "## Installation" + '\n' + response.installation;
        const usage = "## Usage" + '\n' + response.usage;
        const license = "## License" + '\n' + response.license;
        const contributor = "## Contributors" + '\n' + response.contributor;
        fs.writeFile("README.md", title + '\n' + description + '\n' + table + '\n' + installation + '\n' + usage + '\n' + license + '\n' + contributor, function (err) {
            if (err) {
                throw err;
            }
        })
    });
  
