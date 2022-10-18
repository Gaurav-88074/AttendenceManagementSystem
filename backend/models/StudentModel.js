// const Students = require("../data/Students.json")
// function getStudentData() {
//         return new Promise((resolve,reject)=>{
//                 resolve(Students);
//             })
//         }
// module.exports = {
//     getStudentData
// }
        
const db = require('../data/Database');

async function fetchAllStudent() {
    const res = await db.execute("select * from student")
    const raw = await res[0];
    return raw;
}
module.exports = {
    fetchAllStudent
}