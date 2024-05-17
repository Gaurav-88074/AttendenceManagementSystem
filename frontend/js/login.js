window.onload = function (params) {
    document.querySelector(".logo-name").addEventListener("click", (e) => {
        window.location.href = "./dashboard.html";
    });
    document.getElementById("signup-button").addEventListener("click", (e) => {
        window.location.href = "./signup.html";
    });
    document.getElementById("loginButton").addEventListener("click", () => {
        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;
        // console.log(email);
        // console.log(password);
        if (email.length == 0 || password.length == 0) {
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
                email_id: email,
                password: password,
            }),
        };

        // fetch("http://localhost:5000/api/teacher", options)
        fetch("http://localhost:5000/api/teacher", options)
            .then((response) => response.json())
            .then((res) =>{    
                const response = res[0];
                if (response.length==0) {
                    alert("Invalid Credential!!");
                    return;
                }
                else{
                    console.log(response);
                    localStorage.setItem("token",response.id);
                    // window.location.href = "./dashboard.html";
                    window.location.replace("./dashboard.html");
                    
                }
            })
            .catch((err) => console.error(err));
    });
};
