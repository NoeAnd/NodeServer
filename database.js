const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

module.exports.connectToDataBase = () => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("CREATE DATABASE node_server", function (err, result) {
            if (err) throw err;
            console.log("Database created");
        });
    });
};