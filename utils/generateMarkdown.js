function renderLicenseBadge(license) {
    return badge = `![License Badge](https://shields.io/badge/license-` + license + `-green)`;
}

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

function renderLicenseSection(license) {
  let badge = ``;
  let link = ``;
  if (license != `None`) {
    badge = renderLicenseBadge(license);
    link = `More information can be found about the license here: ${renderLicenseLink(license)}`;
  }

  return `
  ${badge}
  ${link}
  `
}

function generateMarkdown(data) {
  return `
  # ${data.title}
    ${renderLicenseSection(data.license)}
  ### Description

  ${data.description}

  ### Table of Contents
  * [Installation](installation)
  * [Usage](usage)
  * [Contribution](contribution)
  * [Test](test)
  * [Questions](questions)

  ## Installation

  Make sure you follow these commands to install this project
  ${data.installation}

  ## Usage

  These are the usage cases for my project
  ${data.usage}

  ## Contribution

  ${data.contribution}
  You can also contact me with my information down below: [Questions](questions)

  ## Test

  ${data.test}

  ## Questions

  You can contact me at: ${data.email}
  My Github is: ${data.github}
`;
}

module.exports = generateMarkdown;
