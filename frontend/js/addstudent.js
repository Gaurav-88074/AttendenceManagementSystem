window.onload = function (params) {
    document.querySelector(".logo-name").addEventListener("click", (e) => {
        window.location.href = "../templates/dashboard.html";
    });
    document.querySelector(".add-button").addEventListener("click", () => {
        const sname = document.getElementById("student-name").value;
        const srollno = document.getElementById("student-rollno").value;
        const semail = document.getElementById("student-email").value;

        if (sname.length == 0 || srollno.length == 0 || semail.length == 0) {
            alert("input fields cannot be empty ");
            return;
        }
        // console.log(sname);
        // console.log(srollno);
        // console.log(semail);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                studentName  : sname,
                studentRollno: srollno,
                studentEmail : semail,
            }),
        };

        // fetch("http://localhost:5000/api/add/student", options)
        //     .then((response) => response.json())
        //     .then((response) => console.log(response))
        //     .catch((err) => console.error(err));
    });
};
