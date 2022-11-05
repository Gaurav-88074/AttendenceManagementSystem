window.onload = function () {
    //------------------------------------
    const markedStudents = new Set();
    // markedStudents.add('88052');
    // markedStudents.add('88050');
    //testing purpose
    // ----------------------------------------------
    const location = window.location.href.split("?");
    const course_id = location[location.length - 1];
    // ----------------------------------------------
    document.querySelector(".logo-name").addEventListener("click", (e) => {
        window.location.href =
            "./dashboard.html" + "?" + localStorage.getItem("token");
    });
    document.querySelector(".name-logo").addEventListener('mouseenter', () => {
        document.querySelector(".option").style.height = "100%";
    })
    document.querySelector(".option").addEventListener('mouseleave', () => {
        document.querySelector(".option").style.height = "0%";
    })
    document.querySelector(".you").addEventListener('mouseleave', () => {
        document.querySelector(".option").style.height = "0%";
    })
    //------------------------------------------------------------
    function getStudentCardWithMark({ name, id }) {
        return `
            <div class="student-card">
                <div class="s-name">
                    ${name}
                </div>
                <div class="s-rollno">
                    ${id}
                </div>
                <button class="mark-button">Mark Present</button>
            </div>
        `;
    }
    //------------------------------------------------------------
    function getStudentCardWithMarked({ name, id }) {
        return `
            <div class="student-card">
                <div class="s-name">
                    ${name}
                </div>
                <div class="s-rollno">
                    ${id}
                </div>
                <button class="marked-button">Marked</button>
            </div>
        `;
    }
    //------------------------------------------------------------
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            course_id: course_id,
        }),
    };
    //------------------------------------------------------------
    async function markPresent(student_id) {
        const optionslocal = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                student_id : student_id,
                course_id: course_id,
                date : new Date().toDateString(),
            }),
        };
        fetch("https://attendencemanagementsystem-production.up.railway.app/api/add/mark/student", optionslocal)
        .then(()=>{
            console.log("added");
        })
    }
    //------------------------------------------------------------
    // fetch("http://localhost:5000/api/students", options)
    function renderStudents(){
        fetch("https://attendencemanagementsystem-production.up.railway.app/api/students", options)
            .then((response) => response.json())
            .then((response) => {
                let dom = "";
                response.sort((a, b) => {
                    return a.id - b.id;
                })
                // console.log(response);

                response.forEach(obj => {
                    // console.log(obj);
                    if (markedStudents.has(obj.id)) {
                        dom += getStudentCardWithMarked(obj);
                    }
                    else {
                        dom += getStudentCardWithMark(obj);
                    }
                });
                document.querySelector(".student-group").innerHTML = dom;
            })
            .then(() => {
                // console.log("done");
                document.querySelectorAll(".mark-button").forEach((element) => {
                    element.addEventListener("click", (e) => {
                        //string id
                        const id = e.target.parentNode.children[1].textContent.trim();
                        markedStudents.add(id);
                        markPresent(id);

                        renderStudents();
                    })
                })

            })
            .catch((err) => console.error(err));
    }
    renderStudents();

}