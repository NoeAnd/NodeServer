console.log("Node server start");

const dataBase = require('./database');

const command = process.argv[2];
console.log('Command: ', command);

if (command === 'resetDatabase'){
    dataBase.resetDatabase();
}

console.log('end');
//
// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//     res.send('Hello World')
// });
//
// app.listen(3000); //Port listening