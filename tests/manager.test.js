
const Manager = require('../lib/manager');
const manager = new Manager('Josh', 2, 'joshj@gmail.com', 33);

describe("Manager class", () => {
    it("new Manager instance has 4 properties", () => {
        const managerProperties = Object.keys(manager);
        expect(managerProperties.length).toEqual(4);
    });

    describe("getName()", () => {
        it("returns Manager name", () => {
            const managerName = manager.getName();
            expect(managerName).toEqual('Josh');
        });
    });

    describe("getId()", () => {
        it("returns Manager ID", () => {
            const managerId = manager.getId();
            expect(managerId).toEqual(2);
        });
    });

    describe("getEmail()", () => {
        it("returns Manager email", () => {
            const managerEmail = manager.getEmail();
            expect(managerEmail).toEqual('joshj@gmail.com');
        });
    });

    describe("getOfficeNumber()", () => {
        it("returns Manager officeNumber", () => {
            const managerOfficeNumber = manager.getOfficeNumber();
            expect(managerOfficeNumber).toEqual(33);
        });
    });


    describe("getRole()", () => {
        it("returns the string 'Manager'", () => {
            const managerRole = manager.getRole();
            expect(managerRole).toEqual('Manager');
        });
    });
});


