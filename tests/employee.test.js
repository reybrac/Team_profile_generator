const { expect, describe, it } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an employee with a name, id, and email", () => {
            const employee = new Employee("Rey", 1, "rb@yahoo.com");
            
            expect(employee.name).toEqual("Rey");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("rb@yahoo.com");
        });
    });

    describe("getName", () => {
        it("should return employee name", () => {
            const employee = new Employee("Rey", 1, "rb@yahoo.com");
            
            expect(employee.getName()).toEqual("Rey");
        });
    });

    describe("getId", () => {
        it("should return employee id", () => {
            const employee = new Employee("Rey", 1, "rb@yahoo.com");
            
            expect(employee.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return employee email", () => {
            const employee = new Employee("Rey", 1, "rb@yahoo.com");
            
            expect(employee.getEmail()).toEqual("rb@yahoo.com");
        });
    });

    describe("getRole", () => {
        it("should return employee role", () => {

            const employee = new Employee("Rey", 1, "rb@yahoo.com");
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});

