// Variables and required files.
const inquirer = require('inquirer');
const fs = require('fs');

var licenseText = "Placeholder Text";

// An array of questions for user input
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
//After obtaining the input perform actions with that data
.then ((data) => {
//This will converted the selected license type into the full text required.
if (data.license === "Community License") {
    licenseText = fs.readFileSync('./Licenses/Community.txt', 'utf8')
}
else if (data.license === "MIT License") {
    licenseText = fs.readFileSync('./Licenses/MIT License.txt', 'utf8')
}
else {
    licenseText = fs.readFileSync('./Licenses/GNU license.txt', 'utf8')
}
// storing the information that needs to be written to a file into a variable.
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
//Creating the file and writing the readMeText to that file.
fs.writeFile(fileName, readMeText, (err) =>
err ? console.log(err) : console.log('Read Me Generated')
);
});

