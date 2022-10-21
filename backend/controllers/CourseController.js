const Course = require('../models/CourseModel');

async function getCourses(request,res){
    try {
        const courses = await Course.fetchAllCourse('b6da1cb8-0b20-48e1-9bcd-9c7c9471d429');
        res.writeHeader(200,{"Content-Type":'application/json'});
        res.end(JSON.stringify(courses));
    } catch (error) {
        console.log(error);
        console.log("problem");
    }
}
module.exports ={
    getCourses
}