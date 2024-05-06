const mysql = require('mysql2');
const Pool = require('pg').Pool
/**
 * connecting the database hosted on server 
 */

//this was our old mysql database connection
// const pool = mysql.createPool({
//     host : 'containers-us-west-91.railway.app',
//     user :'root',
//     database :'railway',
//     password : 'KCoZHCYtMi8WeBXVSsYX',
//     port :5857
// })

// this is our new postgres database connection
const pool = new Pool({
    user: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    database: 'railway',
    password: 'LbuFMpoZQWKHldxthlRGCVpMBZEVGiaS',
    port:46019,
  })
module.exports = pool