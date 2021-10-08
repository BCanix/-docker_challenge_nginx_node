const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: '123456',
    database: 'fullcycle'
});

connection.connect(function(err) {
    if (err) throw err
    console.log('Connected database!')
});

module.exports = connection;