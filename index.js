const inquirer = require('inquirer');
const fs = require('fs');
//const { appendFile } = require('node:fs');

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
      manager.push(answers);
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
    ]).then((data) =>{
      engineers.push(data);
      
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
  ]).then((data) => {
    interns.push(data);
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
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron">
        <h1> My Team </h1>
      </div>
      
      <container class="container">
        <div class="card1" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Manager: ${manager[0].manager}</h5>
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager[0].IDM}</li>
            <li class="list-group-item">email: ${manager[0].emailM}</li>
            <li class="list-group-item">Office #: ${manager[0].office}</li>
          </ul>
        </div>
        
      </container>     
     
      <div class="engineers" style="hidden">
      ${engineers}
      </div>
      <div class="interns" style="hidden">
      ${interns}
      </div>
      
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
    <h5 class="card-title">Engineer: ${engineers.engineer}</h5>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineers.IDE}</li>
      <li class="list-group-item">email: ${engineers.emailE}</li>
      <li class="list-group-item">Github: ${engineers.github}</li>
    </ul>
  </div>
  `
}

function internCard (interns) {
  return `
  <div class="card1" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Intern: ${interns.intern}</h5>
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${interns.IDI}</li>
      <li class="list-group-item">email: ${interns.emailI}</li>
      <li class="list-group-item">School: ${interns.school}</li>
    </ul>
  </div>
  `
}

