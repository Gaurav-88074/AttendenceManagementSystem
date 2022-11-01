window.onload = function() {
    //-------------------------------------------------------
    document.querySelector(".name-logo").addEventListener('mouseenter',()=>{
        document.querySelector(".option").style.height = "100%";
    })
    document.querySelector(".option").addEventListener('mouseleave',()=>{
        document.querySelector(".option").style.height = "0%";
    })
    document.querySelector(".you").addEventListener('mouseleave',()=>{
        document.querySelector(".option").style.height = "0%";
    })
    //-------------------------------------------------------
    document.querySelector('.logo-name').addEventListener("click",(e)=>{
        window.location.href = "../templates/dashboard.html"
    })
    document.querySelector(".create-button").addEventListener("click",(e)=>{
        const inputValue = document.getElementById("subject-name").value;
        if (inputValue.length==0) {
            alert("Input field cannot be empty!")
            return
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token : localStorage.getItem("token"),
                subjectName : inputValue 
            })
        };
        fetch("http://localhost:5000/api/add/course", options)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            window.location.href = "../templates/dashboard.html";
        })
        .catch((err) => console.error(err));
    })
}   