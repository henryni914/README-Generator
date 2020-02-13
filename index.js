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
        }
    ]).then(function (response) {
        console.log(response.title);
        const title = response.title;
        const description = response.description;
        fs.writeFile("README.md", "#Project Name: " + title + '\n' + "##Description <hr>" + description + '\n', function (err) {
            if (err) {
                throw err;
            }
        })
    });
  
