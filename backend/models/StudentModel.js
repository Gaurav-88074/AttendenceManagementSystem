const db = require('../data/Database');

async function fetchAllStudent() {
    // const res = await db.execute("select * from student")
    const res = await db.query("select * from student")
    // const raw = await res[0];
    const raw = await res['rows'];
    return raw;
}
module.exports = {
    fetchAllStudent
}