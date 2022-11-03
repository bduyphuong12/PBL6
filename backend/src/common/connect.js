var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pbl6'
});

connection.connect(function (err, connection) {
    console.log('ket noi thanh cong')
    if(err) console.log("ket noi that bai");
});

module.exports = connection;