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
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.manager}</h1>
    <p class="lead">I am from ${answers.IDM}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.emailM}</li>
      <li class="list-group-item">LinkedIn: ${answers.office}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'manager',
      message: "Please enter the team manager's name?"
    },
    {
      type: 'input',
      name: 'IDM',
      message: 'Enter manager ID?'
    },
    {
      type: 'input',
      name: 'emailM',
      message: 'Enter manager email address?'
    },
    {
      type: 'input',
      name: 'office',
      message: 'Enter the office number?'
    },
    {
      type: 'list',
      name: 'employees',
      message: 'Add additional employee',
      choices: ['Engineer', 'Intern', 'Finish building team'],
    //   when: function (answer) {

    //   }
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
                },
                {
                type: 'input',
                name: 'IDE',
                message: 'Enter engineer ID?'
                },
                {
                type: 'input',
                name: 'emailE',
                message: "Enter engineer's email address?"
                },
                {
                type: 'input',
                name: 'office',
                message: 'Enter the office number?'
                }
            ]);
          break;
        case 'Intern':
            data.intern = "intern";
            console.log(data.intern);
          break;
        case 'Finish building team':
          break;
        // default:
        //   console.log('Select an option!');
      }


    const htmlPageContent = generateHTML(data);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
