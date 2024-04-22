const fs = require(`fs`);
const path = require(`path`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);

const questions = [
    {
        type: `input`,
        name: `title`,
        message: `What is your project title?`
    },
    {
        type: `input`,
        name: `description`,
        message: `Give a small description of your project:`
    },
    {
        type: `input`,
        name: `installation`,
        message: `Give installation instructions for your project:`
    },
    {
        type: `input`,
        name: `usage`,
        message: `How do you use your project?`
    },
    {
        type: `input`,
        name: `contribution`,
        message: `How do we contribute to your project?`
    },
    {
        type: `input`,
        name: `test`,
        message: `Give test instructions for your project:`
    },
    {
        type: `list`,
        name: `license`,
        message: `Choose a license:`,
        choices: [`MIT`, `APACHE`, `GPL`, `None`]
    },
    {
        type: `input`,
        name: `github`,
        message: `What is the name of your Github account?`
    },
    {
        type: `input`,
        name: `email`,
        message: `What is your Email address?`
    },

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerData) => {
        console.log(`Creating README`);
        writeToFile("README.md", generateMarkdown({...inquirerData}))
    })
}

init();
