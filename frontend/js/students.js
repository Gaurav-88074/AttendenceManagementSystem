window.onload = function() {
    // ----------------------------------------------
    const location = window.location.href.split("?");
    const course_id = location[location.length - 1];
    // ----------------------------------------------
    document.querySelector('.logo-name').addEventListener("click",(e)=>{
        window.location.href = "./dashboard.html"+"?"+localStorage.getItem('token')
    })
    document.getElementById('add-student').addEventListener("click",(e)=>{
        window.location.href = "../components/addstudent.html"+"?"+course_id
    })
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            course_id: course_id,
        }),
    };

    fetch("http://localhost:5000/api/students", options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((err) => console.error(err));

}