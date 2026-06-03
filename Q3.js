class Order {
    constructor(orderId, customerName, orderAmount) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.orderAmount = orderAmount;
    }

    displayOrder() {
        console.log("Order ID:", this.orderId);
        console.log("Customer Name:", this.customerName);
        console.log("Order Amount:", this.orderAmount);
    }
}

const order1 = new Order(101, "Siddhi", 5000);
order1.displayOrder();