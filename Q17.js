function restaurantUnavailable() {
    throw "Restaurant Unavailable";
}

function placeOrder() {
    restaurantUnavailable();
}

function orderFood() {
    placeOrder();
}

try {
    orderFood();
}
catch (e) {
    console.log(e + "Order Failed");
}