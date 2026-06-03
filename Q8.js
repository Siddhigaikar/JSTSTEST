class SupportExecutive {
    constructor(name, employeeId, department, experience) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.experience = experience;
    }

    displayInfo() {
        console.log("Name:", this.name);
        console.log("Employee ID:", this.employeeId);
        console.log("Department:", this.department);
        console.log("Experience:", this.experience);
    }
}

const s = new SupportExecutive("Siddhi", 101, "Customer Support", 3);
s.displayInfo();