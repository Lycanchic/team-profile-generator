//node modules
const inquirer = require("inquirer");
/*const fs = require("fs");*/

//team member profiles
const Manager=require("./lib/manager");
const Engineer=require("./lib/engineer");
const Intern=require("./lib/intern");
const Employee=require("./lib/employee");

// HTML generator
const generateHTML = require("./src/generateHTML");

//Team members

const team = [];

//manager prompts
const addmanager = () => {
    return inquirer.prompt([
{
    type: 'input',
    name: 'name',
    message: 'What is the name of the manager of the team?',
    vaidate: nameInput => {
      if (nameInput) {
         return true;
      }else{
         console.log('Please enter the managers name')
      }
    }
 },
 {
    type: 'input',
    name: 'id',
    message: 'What is the managers employee number?',
    vaidate: idInput => {
      if (idInput) {
         return true;
      }else{
         console.log('Please enter the managers id')
      }
    }
 },
 {
    type: 'input',
    name: 'email',
    message: 'What is the managers email address?',
 },
 {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the managers office number?',
 
   }])
 }