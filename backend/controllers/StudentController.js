const Student = require('../models/StudentModel');

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
};

async function getStudents(request,res){
    try {
        const students = await Student.fetchAllStudent();
        // res.statusCode=200;
        // res.writeHeader(200,{"Content-Type":'application/json'});
        res.writeHeader(200,headers);
        res.end(JSON.stringify(students));
    } catch (error) {
        console.log(error);
        console.log("problem");
    }
}
module.exports ={
    getStudents
}