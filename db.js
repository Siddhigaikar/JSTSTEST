const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "roots@20",
    database: "i5"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected...");
    }
});

module.exports = db;