function generateMarkdown(inquirerAnswers) {
    return `

# ${inquirerAnswers.title}
[![travis build](https://travis-ci.com/jervisbay/jervisbay.github.io.svg?branch=master)](https://travis-ci.com/github/jervisbay/jervisbay.github.io)
  
# Description
${inquirerAnswers.description}

# Table of Contents
1.  Installation
2.  Usage
3.  License
4.  Contributing
5.  Tests
6.  Questions

# Installation
Run the following command to install:
    ${ inquirerAnswers.installation }
      
# Usage
    ${inquirerAnswers.usage}

# License
Project uses the following license: ${inquirerAnswers.license}

# Contributors
${inquirerAnswers.contributing}

# Tests
Run the following command to test:
    ${inquirerAnswers.tests}

# Questions
Please contact author at ${inquirerAnswers.email}

![user picture](${inquirerAnswers.picture})
  `;
}

module.exports = generateMarkdown;