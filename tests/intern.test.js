const Intern = require('../lib/Employee');
const intern = new Intern('Nick', 88, 'nickb@outlook.com', 'UCD Davis');

describe("Intern class", () => {
    it("new Intern instance has 3 properties", () => {
        const internProperties = Object.keys(intern);
        expect(internProperties.length).toEqual(3);
    });

    describe("getName()", () => {
        it("returns Intern name", () => {
            const internName = intern.getName();
            expect(internName).toEqual('Nick');
        });
    });

    describe("getId()", () => {
        it("returns Intern ID", () => {
            const internId = intern.getId();
            expect(internId).toEqual(88);
        });
    });

    describe("getEmail()", () => {
        it("returns Intern email", () => {
            const internEmail = intern.getEmail();
            expect(internEmail).toEqual('nickb@outlook.com');
        });
    });

    describe("getSchool)", () => {
        it("returns the string 'UCD Davis'", () => {
            const school = intern.getSchool();
            expect('UCD Davis').toEqual('UCD Davis');
        });
    });
});
