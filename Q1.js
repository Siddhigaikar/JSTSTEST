const db = require('./db');
function createOrder(customerName, product) {
    db.query(
        "INSERT INTO orders(customerName, product) VALUES (?, ?)",
        [customerName, product],
        (err) => {
            if (err) console.log(err);
            else console.log("Order Created");
        }
    );
}
createOrder("Siddhi", "Laptop");

function readOrders() {
    db.query("SELECT * FROM orders", (err, result) => {
        if (err) console.log(err);
        else console.log(result);
    });
}
//readOrders();


function updateOrder(id, product) {
    db.query(
        "UPDATE orders SET product=? WHERE id=?",
        [product, id],
        (err) => {
            if (err) console.log(err);
            else console.log("Order Updated");
        }
    );
}
//updateOrder(1, "Mobile");


function deleteOrder(id) {
    db.query(
        "DELETE FROM orders WHERE id=?",
        [id],
        (err) => {
            if (err) console.log(err);
            else console.log("Order Deleted");
        }
    );
}

//deleteOrder(2);


