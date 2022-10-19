const Student = require('../models/StudentModel');


async function getStudents(request,res){
    try {
        const students = await Student.fetchAllStudent();
        res.writeHeader(200,{"Content-Type":'application/json'});
        res.end(JSON.stringify(students));
    } catch (error) {
        console.log(error);
        console.log("problem");
    }
}
module.exports ={
    getStudents
}