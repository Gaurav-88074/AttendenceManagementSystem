const db = require('../data/Database');

async function fetchAllCourse(teacher_id) {
    // const res = await db.execute("select * from student")
    const res = await db.query(
        `select id,subject from course where id in (select course_id from professor where teacher_id = '${teacher_id}')`
    )
    // const raw = await res[0];
    
    const raw = await res['rows'];
    return raw;
}
module.exports = {
    fetchAllCourse
}