
const manager = require('../lib/manager');
const employee = new manager('Josh','2','joshj@plantlovers.com', '33');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).tobe('Josh');
    expect(employee.id).tobe('2');
    expect(employee.email).tobe('joshj@gmail.com');
    expect(employee.officeNumber).tobe('33');
});

test('test if we can get the getName() method', () => {
    expect(employee.getName()).tobe('Josh');
});

test('test if we can get the getId() method', () => {
    expect(employee.getId()).tobe('2');
});

test('test if we can get the getEmail() method', () => {
    expect(employee.getEmail()).tobe('joshj@gmail.com');
});

test('test if we can get the getRole() method', () => {
    expect(employee.getRole()).tobe('Manager');
});

test('test if we can get the getOfficeNumber() method', () => {
    expect(employee.getOfficeNumber()).tobe('33');
});