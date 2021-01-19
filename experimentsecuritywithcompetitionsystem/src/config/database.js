const mysql = require('mysql');
const config = require('./config');
//To find out more on createPool:
//https://www.npmjs.com/package/mysql#pooling-connections

const pool = mysql.createPool({
        connectionLimit: 100,
        host: 'localhost',
        user: config.databaseUserName,
        password: config.databasePassword,
        database: config.databaseName,
        multipleStatements: true //should not be here as it can allow multiple API calls.
    });

 module.exports=pool;