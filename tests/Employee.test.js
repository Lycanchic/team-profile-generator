const employee = require('../lib/Employee');
const employee = new employee('','','');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).tobe('');
    expect(employee.id).tobe('');
    expect(employee.email).tobe('');
});mp, init

test('test if we can get the getId() method', () => {
    expect(employee.getId()).tobe('');
});

test('test if we can get the getEmail() method', () => {
    expect(employee.getEmail()).tobe('');
});

test('test if we can get the getTitle() method', () => {
    expect(employee.getTitle()).tobe('');
});

test('test if we can get the getgithub() method', () => {
    expect(employee.getTitle()).tobe('');
});