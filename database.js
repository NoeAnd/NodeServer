const mysql = require('mysql');

const databaseName = 'node_server';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

module.exports.resetDatabase = () => {
    deleteDataBase(databaseName);
    createDataBase(databaseName);
    createTables(databaseName);
};

const createDataBase = (databaseName) => {
    const sql = "CREATE DATABASE " + databaseName;
    queryPromise(sql).then(function () {
        console.log("Database created");
    }).catch(function (error) {
        console.log(error.message);
    });
};

const deleteDataBase = (databaseName) => {
    const sql = "DROP DATABASE " + databaseName;
    queryPromise(sql).then(function () {
        console.log("Database deleted");
    }).catch(function (error) {
        console.log(error.message);
    });
};

const createTables = (databaseName) => {
    const sql = "CREATE TABLE " + databaseName +".customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    queryPromise(sql).then(function () {
        console.log("Table created");
    }).catch(function (error) {
        console.log(error.message);
    });
};

const query = (sql) => {
    con.query(sql, function (err, result) {
        if (err) throw err;
        return result;
    });
};
const queryPromise = function (sql) {
    return new Promise(
        function (resolve, reject) {
            con.query(sql, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        }
    )
};