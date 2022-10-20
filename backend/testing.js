const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'containers-us-west-95.railway.app',
//   database: 'railway',
//   password: '8PwVk9SRnYmvkbAesJUv',
//   port: 5821,
// })
// pool.query("select * from teacher").then((res)=>console.log(res['rows']));