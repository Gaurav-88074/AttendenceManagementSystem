window.onload = function () {
    //===============================================
    var token = localStorage.getItem("token");
    if (token === null) {
        window.location.href = "./login.html";
        return;
    }
    //===============================================
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
        return fetch("http://localhost:5000/api/add/mark/student", optionslocal)
        // .then(()=>{
            // console.log("added");
        // })
    }
    //------------------------------------------------------------
    // fetch("http://localhost:5000/api/students", options)
    function renderStudents(){
        fetch("http://localhost:5000/api/students", options)
            .then((response) => response.json())
            .then((response)=>{
                return fetch("http://localhost:5000/api/marked/student",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        course_id: course_id,
                        date : new Date().toDateString(),
                    }),
                })
                .then((respraw)=>respraw.json())
                .then((resp)=>{
                    // console.log(resp);
                    resp.forEach((obj)=>{
                        markedStudents.add(obj.student_id);
                    })
                    return response;
                })
                // return response;
                
            })
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
                    element.addEventListener("click",async (e) => {
                        //string id
                        const id = e.target.parentNode.children[1].textContent.trim();
                        e.target.textContent = "";
                        e.target.classList.add("loading");
                        markedStudents.add(id);
                        const rp = await markPresent(id);
                        if(rp.ok){
                            // console.log("got response",rp);                            
                            renderStudents();
                        }
                    })
                })

            })
            .catch((err) => console.error(err));
    }
    renderStudents();

}