interface Service {
    provideService(): void;
}

class DeliveryAgent implements Service {
    provideService(): void {
        console.log("Delivered Successfully");
    }
}

const d = new DeliveryAgent();
d.provideService();