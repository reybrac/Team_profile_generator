const Intern = require("../lib/intern");

describe("intern", () => {
    describe("Initialization", () => {
        it("should create an intern with a name, id, and email", () => {
            const intern = new Intern("John", 3, "john@hotmail.com");
            
            expect(intern.name).toEqual("John");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("john@hotmail.com");
        });
    });

    describe("getName", () => {
        it("should return intern name", () => {
            const intern = new Intern("John", 3, "john@hotmail.com");
            
            expect(intern.getName()).toEqual("John");
        });
    });

    describe("getId", () => {
        it("should return intern id", () => {
            const intern = new Intern("John", 3, "john@hotmail.com");
            
            expect(intern.getId()).toEqual(3);
        });
    });

    describe("getEmail", () => {
        it("should return intern email", () => {
            const intern = new Intern("John", 3, "john@hotmail.com");
            
            expect(intern.getEmail()).toEqual("john@hotmail.com");
        });
    });

    describe("getSchool", () => {
        it("should return intern email", () => {
            const intern = new Intern("John", 3, "john@hotmail.com", "UC Davis");
            
            expect(intern.getSchool()).toEqual("UC Davis");
        });
    });

    describe("getRole", () => {
        it("should return intern email", () => {
            const intern = new Intern("John", 3, "john@hotmail.com");
            
            expect(intern.getRole()).toEqual("Intern");
        });
    });

});

