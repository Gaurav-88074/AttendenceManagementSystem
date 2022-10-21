const http = require('http');
const {getStudents} = require('./controllers/StudentController')
const {getCourses} = require('./controllers/CourseController')
const server = http.createServer((request,res)=>{
    if(request.url=="/api/students" && request.method=="GET"){
        getStudents(request,res);
    }
    else if(request.url=="/api/courses" && request.method=="GET"){
        getCourses(request,res);
    }
    else{
        res.writeHead(404,{"Content-Type":'application/json'});
        res.end(JSON.stringify({"message" : "route not found"}));
    }
});
const PORT = process.env.PORT ||5000;

server.listen(PORT,()=>console.log((`server is running on port ${PORT}`)));