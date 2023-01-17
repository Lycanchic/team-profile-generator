//node modules
const inquirer = require("inquirer");
const fs = require("fs");

//team member profiles
const Manager=require("./lib/manager");
const Engineer=require("./lib/engineer");
const Intern=require("./lib/intern");
const Employee=require("./lib/employee");

// HTML generator
const generateHTML = require("./src/generateHTML");

//Team members

const teamMembers = [];

// prompts
const questions = async () => {
   const answers = await inquirer
   .prompt([
/*const addmanager = () => {*/
    /*return inquirer.prompt([*/

 {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    vaidate: nameInput => {
      if (nameInput) {
         return true;
      }else{
         console.log('Please enter your name')
      }
    }
 },
 {
    type: 'input',
    name: 'id',
    message: 'What is your employee number?',
    vaidate: idInput => {
      if (idInput) {
         return true;
      }else{
         console.log('Please enter your employee id number')
      }
    }
 },
 {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: emailInput => {
    if (emailInput) {
      return true;
   }else{
      console.log('Please enter your email address')
   }
 }
},

 {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    vaidate: githubInput => {
      if (githubInput) {
         return true;
      }else{
         console.log('Please enter your GitHub username')
      }
    }
 },

 {
   type: 'list',
   name: 'role',
   message: 'What is your role on the team?',
   choices: ['Manager', 'Engineer', 'Intern'],
},
])

 //Manager questions
 if(answers.role === "Manager") {
   const managerAns = await inquirer
   .prompt([

   {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your Office Number?',
      vaidate: officeNumberInput => {
        if (officeNumberInput) {
           return true;
        }else{
           console.log('Please enter your office Number')
        }
      },
   }
])

   const newManager = new Manager (
      answers. name,
      answers. id,
      answers. email,
      managerAns. officeNumberInput
   );
  newTeamMemberData.push(newManager);

} else if (answers.role === "Engineer") {
   const githubAns = await inquirer
     .prompt ([
   {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
   }
])
    const newEngineer = new Engineer ()
     /*answers. name,
     answers. id,
     answers. email,
     githubAns. github
    );*/
   newTeamMemberData.push(newEngineer);

} else if (answers.role === "Intern") {
   const internAns = await inquirer
     .prompt ([
   {
      type: 'input',
      name: 'school',
      message: 'What school did you attend?',
   }
])
    const newIntern = new Intern ()
     /*answers: name,
     answers: id,
     answers: email,
     githubAns: github
   };*/
   newTeamMemberData.push(newIntern);
 

};

async function promptQuestions() {
   await questions()

const addMemeberAns = await inquirer
   .prompt([
   {
     name:'addMember',
     type: 'list',
     choices: ['Add a new member', 'Create team'],
     message: "Please choose your team member"
   }
 ])

 if (addMemberAns.addMember === 'Add a new member') {
   return promptQuestions()
 }
 return createTeam();
}  

promptQuestions();

function createTeam () {
console.log("Newbies", newTeamMemberData)
fs.writeFileSync(
 "./output/index.html",
 generateTeam(newTeamMemberData),
 "utf-8"
);
}}