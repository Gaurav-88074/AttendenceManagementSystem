window.onload = function () {
    //-------------------------------------------------------
    const presentMap = new Map();
    const distinctDates = new Set();
    //-------------------------------------------------------
    document.querySelector(".name-logo").addEventListener('mouseenter', () => {
        document.querySelector(".option").style.height = "100%";
    })
    document.querySelector(".option").addEventListener('mouseleave', () => {
        document.querySelector(".option").style.height = "0%";
    })
    document.querySelector(".you").addEventListener('mouseleave', () => {
        document.querySelector(".option").style.height = "0%";
    })
    //-------------------------------------------------------
    //==================================================================
    var token = localStorage.getItem("token");
    if (token === null) {
        window.location.href = "./login.html";
        return;
    }
    //==================================================================
    // ----------------------------------------------
    const location = window.location.href.split("?");
    const course_id = location[location.length - 1];
    // ----------------------------------------------
    document.querySelector(".logo-name").addEventListener("click", (e) => {
        window.location.href =
            "./dashboard.html" + "?" + localStorage.getItem("token");
    });
    document.getElementById("add-student").addEventListener("click", (e) => {
        window.location.href =
            "../components/addstudent.html" + "?" + course_id;
    });
    document.getElementById("take-attendence").addEventListener("click", (e) => {
        window.location.href =
            "./attendence.html" + "?" + course_id;
    });

    function getStudentCard({ name, id }) {
        const attendenceCount = presentMap.get(id)==undefined ? 0 : presentMap.get(id);
        const totalDays = distinctDates.size;
        // console.log(attendenceCount,totalDays);
        const atCardValue = isNaN(attendenceCount/totalDays) ? 0 :(attendenceCount/totalDays)*100
        return `
            <div class="student-card">
                <div class="s-name">
                    ${name}
                </div>
                <div class="s-rollno">
                    ${id}
                </div>
                <div class="s-rollno">
                    Attendence : ${atCardValue.toFixed(0)}%
                </div>
            </div>
        `;
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            course_id: course_id,
        }),
    };
    // fetch("http://localhost:5000/api/students", options)
    const api_link = "https://attendencemanagementsystem-production.up.railway.app/api/students";
    fetch(api_link, options)
        .then((response) => response.json())
        .then((response) => {
            const attendenceApiLink = "https://attendencemanagementsystem-production.up.railway.app/api/attendence/record/student";
            return fetch(attendenceApiLink, options)
                .then((resp) => resp.json())
                .then((resp) => {
                    // console.log(resp);
                    resp.forEach((obj)=>{
                        if(presentMap.has(obj.student_id)){
                            presentMap.set(
                                obj.student_id,
                                presentMap.get(obj.student_id)+1
                            );
                        }
                        else{
                            presentMap.set(
                                obj.student_id,
                                1
                            );
                        }
                        distinctDates.add(obj.date);
                    })
                    // console.log(presentMap,distinctDates);
                    return response;
                })
                .catch((err) => console.error(err));
            
        })
        .then((response) => {
            let dom = "";
            response.sort((a, b) => {
                return a.id - b.id;
            })
            // console.log(response);
            response.forEach(obj => {
                // console.log(element);

                dom += getStudentCard(obj);
            });
            document.querySelector(".student-group").innerHTML = dom;
        })
        .catch((err) => console.error(err));


};
