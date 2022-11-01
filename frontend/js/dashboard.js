window.onload = function () {
    //-------------------------------------------------------
    document.querySelector(".name-logo").addEventListener('mouseenter',()=>{
        document.querySelector(".option").style.height = "100%";
    })
    document.querySelector(".option").addEventListener('mouseleave',()=>{
        document.querySelector(".option").style.height = "0%";
    })
    document.querySelector(".you").addEventListener('mouseleave',()=>{
        document.querySelector(".option").style.height = "0%";
    })
    //-------------------------------------------------------
    var token = localStorage.getItem("token");
    if (token != null) {
        // document.querySelector(".auth-div").classList.add("authHide");
        // document.querySelector(".you").classList.remove("youHide");
    } else {
        window.location.href = "./login.html";
        // document.querySelector(".you").classList.add("youHide");
        // document.querySelector(".auth-div").classList.remove("authHide");
        return;
    }
    // localStorage.setItem("token","b6da1cb8-0b20-48e1-9bcd-9c7c9471d429");
    document.getElementById("login-button").addEventListener("click", (e) => {
        window.location.href = "./login.html";
    });
    document.getElementById("signup-button").addEventListener("click", (e) => {
        window.location.href = "./signup.html";
    });
    document.querySelector(".create-button").addEventListener("click", (e) => {
        console.log("lol");
        window.location.href = "../components/create.html";
    });
    // document.querySelectorAll(".course-card").forEach((node) => {
    //     node.addEventListener("click", (event) => {
    //         console.log("lol");
    //         window.location.href = "./students.html?" + "hashcode";
    //     });
    // });
    //------------------------------
    function getCourseCard(subjectName,id) {
        return (
            `<div class="course-card">
                <div class="card-top">
                       ${new String(subjectName).toString()}
                </div>
                <div class="card-mid"></div>
                <div class="card-bottom">
                    ${id}
                </div>
            </div>`
        );
    }
    //------------------------------
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: token,
        }),
    };
    if (token != null) {
        fetch("http://localhost:5000/api/courses", options)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                let coursedom="";
                response.forEach(({subject,id})=>{
                    // console.log(subject);
                    coursedom+=getCourseCard(subject,id);
                })
                // console.log(coursedom.length);
                document.querySelector(".courses").innerHTML = coursedom;
                document.querySelectorAll(".course-card").forEach((node) => {
                    node.addEventListener("click", (event) => {
                        // console.log("lol");
                        const courseId = event.target.parentElement.children[2].textContent.trim();
                        window.location.href = "./students.html"+"?"+courseId;
                    });
                });
             })
            .catch((err) => console.error(err));
    }
    
};
