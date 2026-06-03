abstract class DeliveryStaff {
    abstract getSalary(): void;
    abstract getRole(): void;
}

class DeliveryAgent extends DeliveryStaff {
    getSalary(): void {
        console.log("Salary: 25000");
    }

    getRole(): void {
        console.log("Role: Delivery Agent");
    }
}

class Manager extends DeliveryStaff {
    getSalary(): void {
        console.log("Salary: 50000");
    }

    getRole(): void {
        console.log("Role: Manager");
    }
}

const d = new DeliveryAgent();
d.getRole();
d.getSalary();

const m = new Manager();
m.getRole();
m.getSalary();