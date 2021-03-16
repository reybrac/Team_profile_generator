const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var manager = [];
var engineers = [];
var interns = [];

  
  function main() {
    managerPrompt();
  }

  function managerPrompt() {
    inquirer.prompt([
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
  ]).then((answers) => {
      const newManager = new Manager(answers.manager, answers.IDM, answers.emailM, answers.office);
      manager.push(newManager);
      addPrompt();
  });
}

  function addPrompt() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'employees',
        message: 'Add additional employee',
        choices: ["Engineer", "Intern", "Finish building team"]
      }
    ]).then((data) => {
    switch (data.employees) {
      case 'Engineer':
          engineerPrompt();
        break;
      case 'Intern':
          internPrompt();
        break;
      case "Finish building team":
        console.log("done");
        console.log("--------------");
        console.log(manager);
        console.log(engineers);
        console.log(interns);
        var engineerCards = "";
        for (var i =0; i < engineers.length; i++){
          engineerCards += engineerCard(engineers[i]);
        }
        var internCards ="";
        for (var i =0; i < interns.length; i++){
          internCards += internCard(interns[i]);
        }
        writeInfo(engineerCards, internCards);
        
        break;
        
      }
      
    });

  }
  
  function engineerPrompt() {
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
        name: 'github',
        message: 'Enter the GitHub username'
        // test that office is a number
        },
    ]).then((answers) =>{
      const newEngineer = new Engineer(answers.engineer, answers.IDE, answers.emailE, answers.github);
      engineers.push(newEngineer);
      
      addPrompt();
    });
    
  }
  
  // Intern function
  function internPrompt() {
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
      message: "Enter intern's email address?"
      // test that information was entered
      },
      {
      type: 'input',
      name: 'school',
      message: 'Enter the school information?'
      // test that office is a number
      }
  ]).then((answers) => {
    const newIntern = new Intern(answers.intern, answers.IDI, answers.emailI, answers.school);
    interns.push(newIntern);
    addPrompt();
    
  });
  
}

main();

function writeInfo (engineers, interns){
    
    const writeManager = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="./dist/style.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron">
        <h1> My Team </h1>
      </div>
      
      <container class="card-group container">
        <div class="card1" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title"> ${manager[0].name}</h4>
          <h5><i class="fa fa-coffee"> Manager </i></h5>
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager[0].id}</li>
            <li class="list-group-item">email: ${manager[0].email}</li>
            <li class="list-group-item">Office #: ${manager[0].officeNumber}</li>
          </ul>
        </div>

        ${engineers}
            
        ${interns}
      
      </container> 
    </body>
    </html>
  `;

  fs.writeFile('index.html', writeManager, (err) => // test to verify the HTML file was created
  err ? console.log(err) : console.log('Successfully created index.html!'));
  
}

function engineerCard (engineers) {
  return `
  <div class="card1" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title">Engineer: ${engineers.name}</h4>
        <h5><i class="fa fa-cogs"> Engineer </i></h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineers.id}</li>
        <li class="list-group-item">email: ${engineers.email}</li>
        <li class="list-group-item">Github: <a href="www.https://github.com/${engineers.github}">${engineers.github}</a></li>
      </ul>
  </div>
  `
}

function internCard (interns) {
  return `
  <div class="card1" style="width: 18rem;">
    <div class="card-body">
      <h4 class="card-title">${interns.name}</h4>
      <h5><i class="fa fa-graduation-cap"> Intern </i></h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${interns.id}</li>
      <li class="list-group-item">email: ${interns.email}</li>
      <li class="list-group-item">School: ${interns.school}</li>
    </ul>
  </div>
  `
}

