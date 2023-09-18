// License Badge Function
function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `![license](https://img.shields.io/badge/license-${data.license}-darkgreen)
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${data.license}

## Contributing

${data.contributing}

## Test

${data.test}

## Questions

### GitHub

${data.gitHub}

### Contact Information:

${data.email}

`;
}

module.exports = generateMarkdown;
