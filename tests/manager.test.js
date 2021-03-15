const Manager = require("../lib/manager");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an manager with a name, id, and email", () => {
            const manager = new Manager("Reynaldo", 1, "rey@gmail.com");
            
            expect(manager.name).toEqual("Reynaldo");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("rey@gmail.com");
        });
    });

    describe("getName", () => {
        it("should return manager name", () => {
            const manager = new Manager("Reynaldo", 1, "rey@gmail.com");
            
            expect(manager.getName()).toEqual("Reynaldo");
        });
    });

    describe("getId", () => {
        it("should return manager id", () => {
            const manager = new Manager("Reynaldo", 1, "rey@gmail.com");
            
            expect(manager.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return manager email", () => {
            const manager = new Manager("Reynaldo", 1, "rey@gmail.com");
            
            expect(manager.getEmail()).toEqual("rey@gmail.com");
        });
    });

    describe("getRole", () => {
        it("should return manager role", () => {

            const manager = new Manager("Reynaldo", 1, "rey@gmail.com");
            expect(manager.getRole()).toEqual("Manager");
        });
    });

    describe("getOfficeNumber", () => {
        it("should return Github name", () => {

            const manager = new Manager("Reynaldo", 1, "rey@gmail.com", 10);
            expect(manager.getOfficeNumber()).toEqual(10);
        });
    });

});
