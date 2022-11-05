const http = require("http");
const {
    getStudents,
    addStudent,
    getCourseStudents,
    addStudentAttendenceRecord,
    getMarkedStudents
} = require("./controllers/StudentController");
const { getCourses, addCourse } = require("./controllers/CourseController");
const {
    addTeacher,
    getTeacherData,
} = require("./controllers/TeacherController");
const server = http.createServer((request, res) => {
    if (request.url === "/api/students" && request.method === "POST") {
        getCourseStudents(request, res);
    } else if (request.url === "/api/courses" && request.method === "GET") {
        getCourses(request, res);
    } else if (request.url === "/api/courses" && request.method === "POST") {
        getCourses(request, res);
    } else if (request.url === "/api/add/course" && request.method === "POST") {
        addCourse(request, res);
    } else if (
        request.url === "/api/add/teacher" &&
        request.method === "POST"
    ) {
        addTeacher(request, res);
    } else if (request.url === "/api/teacher" && request.method === "POST") {
        getTeacherData(request, res);
    } else if (
        request.url === "/api/add/student" &&
        request.method === "POST"
    ) {
        addStudent(request, res);
    } else if (
        request.url === "/api/add/mark/student" &&
        request.method === "POST"
    ) {
        addStudentAttendenceRecord(request, res);
    } else if (
        request.url === "/api/marked/student" &&
        request.method === "POST"
    ) {
        getMarkedStudents(request, res);
    } else {
        console.log("hit 3");
        getStudents(request, res);
        // res.writeHeader(404, { "Content-Type": "application/json" });
        // res.writeHeader(404, headers);
        // res.end(JSON.stringify({ message: "route not found" }));
    }
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
// if (request.method === "OPTIONS") {
//     res.writeHead(204, headers);
//     res.end();
//     return;
//   }
