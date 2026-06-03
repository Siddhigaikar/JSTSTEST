"use strict";
class DeliveryStaff {
}
class DeliveryAgent extends DeliveryStaff {
    getSalary() {
        console.log("Salary: 25000");
    }
    getRole() {
        console.log("Role: Delivery Agent");
    }
}
class Manager extends DeliveryStaff {
    getSalary() {
        console.log("Salary: 50000");
    }
    getRole() {
        console.log("Role: Manager");
    }
}
const d = new DeliveryAgent();
d.getRole();
d.getSalary();
const m = new Manager();
m.getRole();
m.getSalary();
