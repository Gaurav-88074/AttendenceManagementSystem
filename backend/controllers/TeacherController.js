const Teacher = require("../models/TeacherModel");

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
};

async function addTeacher(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const teacher = await Teacher.addOneTeacher(
                obj["teacherName"],
                obj["email_id"],
                obj["password"]
            );
            res.writeHeader(200, headers);
            res.end(JSON.stringify(teacher));
        } catch (error) {
            console.log(error);
            console.log("problem in add teacher");
        }
    });
}
async function getTeacherData(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const teacher = await Teacher.getOneTeacher(
                obj["email_id"],
                obj["password"]
            );
            res.writeHeader(200, headers);
            res.end(JSON.stringify(teacher));
        } catch (error) {
            console.log(error);
            console.log("problem in get teacher");
        }
    });
}
module.exports = {
    addTeacher,
    getTeacherData
};
