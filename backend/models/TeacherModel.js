const db = require("../data/Database");
const { v4: uuidv4 } = require("uuid");
async function addOneTeacher(teacherName, email_id, password) {
    const id = uuidv4();
    const res = await db.query(
        `insert into teacher values('${id}','${teacherName}','${email_id}')`
    );
    await db.query(`insert into users values('${email_id}','${password}')`);
    // const raw = await res[0];
    const raw = await res["rows"];
    // console.log(raw);
    return raw;
}
async function getOneTeacher(email_id, password) {
    const res = await db.query(
        `select id,name,email_id from teacher where email_id =  ( select email_id from users where email_id = '${email_id}'
        and password = '${password}')`
    );
    // const raw = await res[0];
    const raw = await res["rows"];
    return raw;
}
module.exports = {
    addOneTeacher,
    getOneTeacher
};
