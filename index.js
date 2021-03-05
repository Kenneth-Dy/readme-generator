const inquirer = require('inquirer')
const fs = require('fs')

const license_choices = [
  {
    
  }
]

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project:'
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are your install instructions?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe how to use your project:'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are your contribution guidelines?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are your test instructions?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license do you want?'
    choices: ['I want it simple and permissive', 'I care about sharing improvements', 'No restrictions']
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:'
  }
]

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(res => {
      let read = `
        #${res.title} 

        ##Description

        ${res.description}
      
        ##Table of Contents

          [Installation](#Installation)
          [Usage](#Usage)
          [License](#License)
          [Contributing](#Contributing)
          [Tests](#Tests)
          [Questions](#Questions)
      
        ##Installation

        ${res.install}
        
        ##Usage

        ${res.usage}

        ##License


        ##Contributing

        ${res.contribution}
        
        ##Tests
      
        ${res.test}

        ##Questions

        GitHub account:
          * [${res.username}](https://github.com/${res.username})

        If you have questions please contact me through my email: 
          * ${res.email}
         
      `
    })
    .catch(err => console.log(err))
}

// function call to initialize program
init();
