const employee = require('../lib/employee');
const employee = new employee('Renard','43','renards@royalty.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).tobe('Renard');
    expect(employee.id).tobe('43');
    expect(employee.email).tobe('renards@royalty.com');
    expect(employee.github).tobe('renards');
});

test('test if we can get the getId() method', () => {
    expect(employee.getId()).tobe('43');
});

test('test if we can get the getEmail() method', () => {
    expect(employee.getEmail()).tobe('renards@royalty.com');
});

test('test if we can get the getRole() method', () => {
    expect(employee.getRole()).tobe('Engineer');
});

test('test if we can get the getgithub() method', () => {
    expect(employee.getTitle()).tobe('');
});