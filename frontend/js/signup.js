window.onload = function(params) {
    document.querySelector(".logo-name").addEventListener("click",(e)=>{
        window.location.href = "./dashboard.html";
    })
    document.getElementById("login-button").addEventListener("click",(e)=>{
        window.location.href = "./login.html";
    })
    document.getElementById("signupButton").addEventListener("click",()=>{
        const email = document.getElementById("emailInput").value;
        const username = document.getElementById("nameInput").value;
        const password = document.getElementById("passwordInput").value;
        // console.log(email);
        // console.log(username);
        // console.log(password);
    })
}