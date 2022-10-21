window.onload = function() {
    
    document.querySelector('.create-button').addEventListener("click",(e)=>{
        console.log("lol");
        window.location.href = "../components/create.html";
    })
    document.querySelectorAll('.course-card').forEach((node)=>{
        node.addEventListener("click",(event)=>{
            console.log("lol");
            window.location.href = "./students.html";
        })
    })
}