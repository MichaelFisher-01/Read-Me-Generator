// Variables and required files.
const inquirer = require('inquirer');
const fs = require('fs');

var licenseText;

// An array of questions for user input
inquirer
	.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of the project?',
		},
		{
			type: 'input',
			name: 'github',
			message: 'What is your github username?',
		},
		{
			type: 'input',
			name: 'email',
			message: 'What is your email address?',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Please write a description of the project.',
		},
		{
			type: 'input',
			name: 'installation',
			message: 'What commaned shoud be run to install dependencies?',
			default: 'npm i',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'What does the user need to know about using the repo?',
		},
		{
			type: 'input',
			name: 'contribution',
			message:
				'What does the user need to know about contributing to the repo?',
		},
		{
			type: 'input',
			name: 'test',
			message: 'What command shoud be run to run tests?',
			default: 'npm test',
		},
		{
			type: 'list',
			message: 'What type of license does the project require?',
			name: 'license',
			choices: ['APACHE 2.0', 'MIT', 'GPL 3.0', 'GNU AGPLv3', 'None'],
		},
	])
	//After obtaining the input perform actions with that data
	.then((data) => {
		//This will converted the selected license type into the full text required.
		if (data.license === 'APACHE 2.0') {
			licenseText = fs.readFileSync('./Licenses/APACHE 2.0.txt', 'utf8');
		} else if (data.license === 'MIT') {
			licenseText = fs.readFileSync('./Licenses/MIT.txt', 'utf8');
		} else if (data.license === 'GPL 3.0') {
			licenseText = fs.readFileSync('./Licenses/GPL 3.0.txt', 'utf8');
		} else if (data.license === 'GNU AGPLv3') {
			licenseText = fs.readFileSync('./Licenses/GNU AGPLv3.txt', 'utf8');
		} else {
			licenseText = 'No license exsist for this project';
		}

		// storing the information that needs to be written to a file into a variable.
		const readMeText = `# ${data.title}

    ![GitHub license](https://img.shields.io/badge/license-${data.license
			.split(' ')
			.join('')}-blue.svg)

## Description
${data.description}

##Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)

## Installation

Run the following command(s) to install the dependncies: ${data.installation}

## Usage

${data.usage}

## Contributions

${data.contribution}

## Testing
To test the project please use: ${data.test}

## Questions
If you have questions you can contact me at:
https://github.com/${data.github}
${data.email}

## License Information

${licenseText}`;
		// Giving the file the generic read me name.
		const fileName = 'ReadMe.md';

		//Creating the file and writing the readMeText to that file.
		fs.writeFile(fileName, readMeText, (err) =>
			err ? console.log(err) : console.log('Read Me Generated')
		);
	});
