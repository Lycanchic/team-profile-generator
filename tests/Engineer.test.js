const Engineer = require('../lib/engineer');
const engineer = new Engineer('Renard', 43, 'renards@live.com', 'renards');

describe("Engineer class", () => {
    it("new Engineer instance has 4 properties", () => {
        const engineerProperties = Object.keys(engineer);
        expect(engineerProperties.length).toEqual(4);
    });
});

    describe("getName()", () => {
        it("returns Engineer name", () => {
            const engineerName = engineer.getName();
            expect(engineerName).toEqual('Renard');
        });
    });

    describe("getId()", () => {
        it("returns Manager ID", () => {
            const managerId = engineer.getId();
            expect(managerId).toEqual(43);
        });
    });

    describe("getEmail()", () => {
        it("returns Manager email", () => {
            const managerEmail = engineer.getEmail();
            expect(managerEmail).toEqual('renards@live.com');
        });
    });

    describe("getGitHub()", () => {
        it("returns Engineer GitHub", () => {
            const engineerGitHub = engineer.getGithub();
            expect(engineerGitHub).toEqual('renards');
        });
    });

    describe("getRole()", () => {
        it("returns the string 'Engineer'", () => {
            const engineerRole = engineer.getRole();
            expect(engineerRole).toEqual('Engineer');
        });
    });

