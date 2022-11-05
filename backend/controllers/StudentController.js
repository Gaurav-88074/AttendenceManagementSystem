const Student = require("../models/StudentModel");

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
};

async function getStudents(request, res) {
    try {
        const students = await Student.fetchAllStudent();
        // res.statusCode=200;
        // res.writeHeader(200,{"Content-Type":'application/json'});
        res.writeHeader(200, headers);
        res.end(JSON.stringify(students));
    } catch (error) {
        console.log(error);
        console.log("problem");
    }
}
async function addStudent(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const students = await Student.addOneStudent(
                obj['course_id'],
                obj['studentRollno'],
                obj['studentName'],
                obj['studentEmail']
            );
            // res.statusCode=200;
            // res.writeHeader(200,{"Content-Type":'application/json'});
            res.writeHeader(200, headers);
            res.end(JSON.stringify(students));
        } catch (error) {
            console.log(error);
            console.log("problem");
        }
    });
}
async function getCourseStudents(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const students = await Student.fetchStudents(
                obj['course_id'],
            );
            // res.statusCode=200;
            // res.writeHeader(200,{"Content-Type":'application/json'});
            res.writeHeader(200, headers);
            res.end(JSON.stringify(students));
        } catch (error) {
            console.log(error);
            console.log("problem");
        }
    });
}
async function addStudentAttendenceRecord(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        // console.log(obj);
        try {
            const resp = await Student.markStudentPresent(obj);
            // res.statusCode=200;
            // res.writeHeader(200,{"Content-Type":'application/json'});
            res.writeHeader(200, headers);
            res.end(JSON.stringify(resp));
        } catch (error) {
            console.log(error);
            console.log("problem in addStudentAttendenceRecord");
        }
    });
}
async function getMarkedStudents(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        // console.log(obj);
        try {
            const resp = await Student.fetchMarkedStudents(obj);
            // res.statusCode=200;
            // res.writeHeader(200,{"Content-Type":'application/json'});
            res.writeHeader(200, headers);
            res.end(JSON.stringify(resp));
        } catch (error) {
            console.log(error);
            console.log("problem in getMarkedStudents");
        }
    });
}
module.exports = {
    getStudents,
    addStudent,
    getCourseStudents,
    addStudentAttendenceRecord,
    getMarkedStudents
};
