const mysql = require('mysql2');
const Pool = require('pg').Pool
/**
 * connecting the database hosted on server 
 */

//this was our old mysql database connection
// const pool = mysql.createPool({
//     host : 'localhost',
//     user :'root',
//     database :'attendencemgmt',
//     password : 'root',
//     // port :3306
// })
// module.exports = pool.promise();
// this is our new postgres database connection
const pool = new Pool({
    user: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    database: 'railway',
    password: 'OTunGJhREwxEIDCvsxTzUFzEwaFIkYIJ',
    port:27537,
  })
module.exports = pool;