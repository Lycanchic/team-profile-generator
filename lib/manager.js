const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
  getOfficeNumber() {
    return this.officeNumber;
  }  

  getEmail() {
    return this.email;
  }  

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;