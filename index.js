const inquirer = require('inquirer')
const fs = require('fs')

const licenseChoices = [
  {
    image: 'https://img.shields.io/badge/license-MIT-brightgreen',
    text: `
                  MIT License Copyright (c) 2021 Kenneth Dy

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
  },
  {
    image: 'https://img.shields.io/badge/license-GNU%20GPLv3-blue',
    text: `Refer to the link for the full  license information: [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`
  },
  {
    image: 'https://img.shields.io/badge/license-Unlicense-lightgrey'
    text:`
    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.

    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

    For more information, please refer to <https://unlicense.org>`
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

      if (res.license === 'I want it simple and permissive') {
        let licenseImage = licenseChoices[0].image
        let licenseText = licenseChoices[0].text
      }else if (res.license === 'I care about sharing improvements') {
        let licenseImage = licenseChoices[1].image
        let licenseText = licenseChoices[1].text
      }else {
        let licenseImage = licenseChoices[2].image
        let licenseText = licenseChoices[2].text
      }

      let read = `
        #${res.title} 

        ##Description

        ![license](${licenseImage})

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

        ${licenseText}

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

      fs.writeFile('./generatedREADME/README.md', read, err => {
        if(err) { console.log(err) }
      })
    })
    .catch(err => console.log(err))
}

// function call to initialize program
init();
