const db = require("../data/Database");

async function fetchAllStudent() {
    // const res = await db.execute("select * from student")
    const res = await db.query("select * from student");
    // const res = await db.query("ALTER TABLE student ALTER COLUMN id TYPE varchar(100)");
    // console.log(res);
    // const raw = await res[0];
    const raw = await res["rows"];
    // console.log(raw);
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
    
    const p1 = await db.query(
        // `insert into student values(${new String(student_id)},'${name}','${email_id}')`
        `insert into student values(${new String(student_id)},'${name}','${email_id}') ON CONFLICT DO NOTHING`
    );
    const p2 = await db.query(
        `insert into classroom values('${course_id}','${student_id}')`
    );
    // const raw = await res[0];
    // const raw = await res["rows"];
    return await Promise.all([p1,p2]);
}
async function markStudentPresent({student_id,course_id,date}) {
    const res = await db.query(
        `insert into attendence values(${student_id},'${course_id}','${date}')`
    );
    // const raw = await res[0];
    const raw = await res["rows"];
    return raw;

}
async function fetchMarkedStudents({course_id,date}) {
    const res = await db.query(
        `
        select student_id from attendence 
        where 
        course_id = '${course_id}' 
        and 
        date = '${date}'
        `
    );
    // const raw = await res[0];
    const raw = await res["rows"];
    return raw;

}
async function fetchAttendenceRecords({course_id}) {
    const res = await db.query(
        `
        select * from attendence 
        where 
        course_id = '${course_id}' 
        `
    );
    // const raw = await res[0];
    const raw = await res["rows"];
    return raw;

}
module.exports = {
    fetchAllStudent,
    addOneStudent,
    fetchStudents,
    markStudentPresent,
    fetchMarkedStudents,
    fetchAttendenceRecords
};

// `where not exists (select id from student where id = '${student_id}')`
