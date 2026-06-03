try {
    let deliveryAddress = "";

    if (deliveryAddress === "") {
        throw "Delivery Address is Missing";
    }

    console.log("Order Placed Successfully");
}
catch (error) {
    console.log(error);
}