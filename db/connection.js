const mysql = require('mysql2');

//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Hamilton44!',
        database: 'election'
    }
);


module.exports = db;