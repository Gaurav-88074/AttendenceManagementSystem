const mysql = require('mysql2');

/**
 * connecting the database hosted on server 
 */
const pool = mysql.createPool({
    host : 'containers-us-west-91.railway.app',
    user :'root',
    database :'railway',
    password : 'KCoZHCYtMi8WeBXVSsYX',
    port :5857
})

module.exports = pool.promise()