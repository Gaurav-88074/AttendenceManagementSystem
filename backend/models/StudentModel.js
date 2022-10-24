const db = require("../data/Database");

async function fetchAllStudent() {
    // const res = await db.execute("select * from student")
    const res = await db.query("select * from student");
    // const raw = await res[0];
    const raw = await res["rows"];
    return raw;
}
async function fetchStudents(course_id) {
    // const res = await db.execute("select * from student")
    const res = await db.query(
        `select * from student where id in (select student_id from classroom where course_id = '${course_id}')`
    );
    // const raw = await res[0];
    const raw = await res["rows"];
    return raw;
}
async function addOneStudent(course_id, student_id, name, email_id) {
    // const res = await db.execute("select * from student")
    const res = await db.query(
        `insert into student values(${student_id},'${name}','${email_id}')`
    );
    await db.query(`insert into classroom values('${course_id}','${student_id}')`);
    // const raw = await res[0];
    const raw = await res["rows"];
    return raw;
}
module.exports = {
    fetchAllStudent,
    addOneStudent,
    fetchStudents,
};
