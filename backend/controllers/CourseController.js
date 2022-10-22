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
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const courses = await Course.fetchAllCourse(
                obj['token']
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
    });
}
async function addCourse(request, res) {
    var body = "";
    request.on("data", function (chunk) {
        body += chunk;
    });
    request.on("end", async function () {
        obj = JSON.parse(body);
        try {
            const newcourse = await Course.addOneCourse(obj["subjectName"],obj['token']);
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
