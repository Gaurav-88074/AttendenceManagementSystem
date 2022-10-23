window.onload = function() {
    document.querySelector('.logo-name').addEventListener("click",(e)=>{
        window.location.href = "./dashboard.html"
    })
    document.getElementById('add-student').addEventListener("click",(e)=>{
        window.location.href = "../components/addstudent.html"
    })
}