//initial file creation

const inquirer = require('inquirer');
const fs = require('fs');



const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
    <h1>My Team</h1>
  </div>
  <div class="container">
    Name: ${answers.manager}
    Manager
    ID: ${answers.IDM}
    Email: ${answers.emailM}
    Office number: ${answers.office}
  </div>
  <div class ="container">
    Name: ${answers.engineer}
    Engineer 
    ID: ${answers.emailE}
    Email: 
    GitHub:

</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'manager',
      message: "Please enter the team manager's name?"
        // test manager input is an alphabetical string
    },
    {
      type: 'input',
      name: 'IDM',
      message: 'Enter manager ID?'
        // test ID is a number
    },
    {
      type: 'input',
      name: 'emailM',
      message: 'Enter manager email address?'
        // test that information was entered
    },
    {
      type: 'input',
      name: 'office',
      message: 'Enter the office number?'
        // test that office is a number
    },
    {
      type: 'list',
      name: 'employees',
      message: 'Add additional employee',
      choices: ['Engineer', 'Intern', 'Finish building team'],
        // If engineer --
        // if intern --
        // if FBT -- run the code and create HTML file   
    },
    
  ])
  .then((data) => {

    switch (data.employees) {
        case 'Engineer':
            inquirer.prompt([
                {
                type: 'input',
                name: 'engineer',
                message: "Please enter the engineer's name?"
                // test manager input is an alphabetical string
                },
                {
                type: 'input',
                name: 'IDE',
                message: 'Enter engineer ID?'
                // test ID is a number
                },
                {
                type: 'input',
                name: 'emailE',
                message: "Enter engineer's email address?"
                // test that information was entered
                },
                {
                type: 'input',
                name: 'office',
                message: 'Enter the office number?'
                // test that office is a number
                }
            ]);
          break;
        case 'Intern':
            inquirer.prompt([
                {
                type: 'input',
                name: 'intern',
                message: "Please enter the intern's name?"
                // test manager input is an alphabetical string
                },
                {
                type: 'input',
                name: 'IDI',
                message: 'Enter intern ID?'
                // test ID is a number
                },
                {
                type: 'input',
                name: 'emailI',
                message: "Enter engineer's email address?"
                // test that information was entered
                },
                {
                type: 'input',
                name: 'school',
                message: 'Enter the school information?'
                // test that office is a number
                }
            ]);
          break;
        case 'Finish building team':
          break;
        // default:
        //   console.log('Select an option!');
      }

    // need to add test
    const htmlPageContent = generateHTML(data);

    fs.writeFile('index.html', htmlPageContent, (err) => // test to verify the HTML file was created
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
