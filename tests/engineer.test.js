const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an engineer with a name, id, and email", () => {
            const engineer = new Engineer("Mari", 2, "mari@aol.com");
            
            expect(engineer.name).toEqual("Mari");
            expect(engineer.id).toEqual(2);
            expect(engineer.email).toEqual("mari@aol.com");
        });
    });

    describe("getName", () => {
        it("should return engineer name", () => {
            const engineer = new Engineer("Mari", 2, "mari@aol.com");
            
            expect(engineer.getName()).toEqual("Mari");
        });
    });

    describe("getId", () => {
        it("should return engineer id", () => {
            const engineer = new Engineer("Mari", 2, "mari@aol.com");
            
            expect(engineer.getId()).toEqual(2);
        });
    });

    describe("getEmail", () => {
        it("should return engineer email", () => {
            const engineer = new Engineer("Mari", 2, "mari@aol.com");
            
            expect(engineer.getEmail()).toEqual("mari@aol.com");
        });
    });

    describe("getRole", () => {
        it("should return engineer role", () => {

            const engineer = new Engineer("Mari", 2, "mari@aol.com");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

    describe("getGithub", () => {
        it("should return Github name", () => {

            const engineer = new Engineer("Mari", 2, "mari@aol.com", "maribrac");
            expect(engineer.getGithub()).toEqual("maribrac");
        });
    });

});

