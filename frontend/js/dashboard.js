window.onload = function () {
    document.getElementById("login-button").addEventListener("click",(e)=>{
        window.location.href = "./login.html";
    })
    document.querySelector(".create-button").addEventListener("click", (e) => {
        console.log("lol");
        window.location.href = "../components/create.html";
    });
    document.querySelectorAll(".course-card").forEach((node) => {
        node.addEventListener("click", (event) => {
            console.log("lol");
            window.location.href = "./students.html?" + "hashcode";
        });
    });
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch("http://localhost:5000/api/students", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    fetch("http://localhost:5000/api/courses", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
};
