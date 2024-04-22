// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return badge = `![License Badge](https://shields.io/badge/license-` + license + `-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `MIT`) {
    return `https://mit-license.org/`;
  }
  else if (license === `APACHE`) {
    return `https://www.apache.org/licenses/LICENSE-2.0.html`;
  }
  else if (license === `GPL`) {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = ``;
  let link = ``;
  if (license != `None`) {
    const badge = renderLicenseBadge(license);
    const link = `More information can be found about the license here: ${renderLicenseLink(license)}`;
  }

  return `
      ${badge}
      ${link}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
      # ${data.title}

      ${renderLicenseSection(data.license)}

      ### Description

      ${data.description}

      ### Table of Contents
      * Installation
      * Usage
      * Contribution
      * Test
      * Questions

      ## Installation

      Make sure you follow these commands to install this project
      ${data.installation}

      ## Usage

      You should use this project as a guideline to help create README's
      ${data.usage}

      ## Contribution

      ${data.contribution}

      ## Test

      ${data.test}

      ## Questions

      You can contact me at: ${data.email}
      My Github is: ${data.github}
`;
}

module.exports = generateMarkdown;
