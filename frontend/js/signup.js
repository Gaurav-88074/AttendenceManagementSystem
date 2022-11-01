window.onload = function (params) {
    document.querySelector(".logo-name").addEventListener("click", (e) => {
        window.location.href = "./dashboard.html";
    })
    document.getElementById("login-button").addEventListener("click", (e) => {
        window.location.href = "./login.html";
    })
    document.getElementById("signupButton").addEventListener("click", () => {
        const email = document.getElementById("emailInput").value;
        const username = document.getElementById("nameInput").value;
        const password = document.getElementById("passwordInput").value;
        if (email.length == 0 || username.length == 0 || password.length == 0) {
            alert("input fields cannot be empty ");
            return;
        }
        // console.log(email);
        // console.log(username);
        // console.log(password);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                teacherName: username,
                email_id: email,
                password: password
            }),
        };

        // fetch("http://localhost:5000/api/add/teacher", options)
        fetch("https://attendencemanagementsystem-production.up.railway.app/add/teacher", options)
            .then((response) => response.json())
            .then((response) => { 
                console.log(response);
                window.location.href = "./login.html"; 
            })
            .catch((err) => console.error(err));

    })
}