const employee = require('../lib/employee');
const employee = new employee('Nick','88','nickb@outlook.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).tobe('Nick');
    expect(employee.id).tobe('88');
    expect(employee.email).tobe('nickb@outlook.com');
    expect(employee.school).tobe('UCD Davis');
});mp, init

test('test if we can get the getName() method', () => {
    expect(employee.getName()).tobe('Nick');
});

test('test if we can get the getId() method', () => {
    expect(employee.getId()).tobe('88');
});

test('test if we can get the getEmail() method', () => {
    expect(employee.getEmail()).tobe('nickb@outlook.com');
});

test('test if we can get the getRole() method', () => {
    expect(employee.getTitle()).tobe('Intern');
});

test('test if we can get the getSchool() method', () => {
    expect(employee.getSchool()).tobe('School');
});