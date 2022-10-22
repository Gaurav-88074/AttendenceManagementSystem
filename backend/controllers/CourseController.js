const Course = require("../models/CourseModel");
var qs = require("querystring");
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Max-Age": 2592000, // 30 days
    "Content-Type": "application/json",
};

async function getCourses(request, res) {
    try {
        const courses = await Course.fetchAllCourse(
            "b6da1cb8-0b20-48e1-9bcd-9c7c9471d429"
        );
        // res.statusCode=200;
        // res.setHeader("Content-Type", "application/json")
        // res.writeHeader(200, { "Content-Type": "application/json" });
        res.writeHeader(200, headers);
        res.end(JSON.stringify(courses));
    } catch (error) {
        console.log(error);
        console.log("problem");
    }
}
async function addCourse(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const newcourse = await Course.addOneCourse(obj['subjectName']);
            res.writeHeader(200, headers);
            res.end(JSON.stringify(newcourse));
        } catch (error) {
            console.log(error);
            console.log("problem in addCourse");
        }
    });
}
module.exports = {
    getCourses,
    addCourse,
};
