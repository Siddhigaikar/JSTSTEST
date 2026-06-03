try {
    let orderCompleted = true;

    if (!orderCompleted) {
        throw "Order Failed";
    }

    console.log("Order Completed Successfully");
}
catch (error) {
    console.log(error);
}
finally {
    console.log("Order Records Updated");
}