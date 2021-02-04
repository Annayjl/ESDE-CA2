const mysql = require('mysql');
const config = require('./config');
//To find out more on createPool:
//https://www.npmjs.com/package/mysql#pooling-connections

const pool = mysql.createPool({
        connectionLimit: 100,
        host: 'my-rds-db.ctya1io0rwu2.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: '12345678',
        database: 'competition_system_security_concept',
        multipleStatements: true //should not be here as it can allow multiple API calls.
    });

 module.exports=pool;