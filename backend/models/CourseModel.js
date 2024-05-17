const db = require('../data/Database');
const { v4: uuidv4 } = require('uuid');

async function fetchAllCourse(teacher_id) {
    // const res = await db.execute("select * from student")
    const res = await db.query(
        `select id,subject from course where id in (select course_id from professor where teacher_id = '${teacher_id}')`
    )
    // const raw = await res[0];

    
    const raw = await res["rows"];
    return raw;
}
async function addOneCourse(courseName,token) {
    const id  = uuidv4();
    const res = await db.query(
        `insert into course values('${id}','${courseName}')`
    )
    await db.query(
        `insert into professor values('${token}','${id}')`
    )
    // const raw = await res[0];
    const raw = await res["rows"];
    return raw;
}
module.exports = {
    fetchAllCourse,
    addOneCourse
}