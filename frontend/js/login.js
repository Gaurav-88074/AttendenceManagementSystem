window.onload = function(params) {
    document.querySelector(".logo-name").addEventListener("click",(e)=>{
        window.location.href = "./dashboard.html";
    })
    document.getElementById("signup-button").addEventListener("click",(e)=>{
        window.location.href = "./signup.html";
    })
    document.getElementById("loginButton").addEventListener("click",()=>{
        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("passwordInput").value;
        // console.log(email);
        // console.log(password);
    })
}