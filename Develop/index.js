// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

var licenseText = "Placeholder Text";

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github information?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please descript the project...',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is the project installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can someone contribute to the project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are test cases for the project?',
    },
    {
        type: 'list',
        message: 'What type of license does the project require?',
        name: 'license',
        choices: ['Community License', 'MIT License', 'GNU GPLv3 License']
    }
])

.then ((data) => {

if (data.license === "Community License") {
    licenseText = fs.readFileSync('./Licenses/Community.txt', 'utf8')
}
else if (data.license === "MIT License") {
    licenseText = fs.readFileSync('./Licenses/MIT License.txt', 'utf8')
}
else {
    licenseText = fs.readFileSync('./Licenses/GNU license.txt', 'utf8')
}
const readMeText =         
`#${data.title}

##Description
${data.description}

##Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Guidelines](#guidelines)
- [Testing](#testing)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

##Contribution

${data.contribution}

##Testing Instructions
${data.test}

##Questions
Feel free to reach out with questions to:
${data.github}
${data.email}

##License Information

${licenseText}`

const fileName = 'ReadMe.md'

fs.writeFile(fileName, readMeText, (err) =>
err ? console.log(err) : console.log('Read Me Generated')
);
});
// TODO: Create a function to write README file

// TODO: Create a function to initialize app


// Function call to initialize app
