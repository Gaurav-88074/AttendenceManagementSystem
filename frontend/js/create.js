window.onload = function() {
    document.querySelector('.logo-name').addEventListener("click",(e)=>{
        window.location.href = "../templates/dashboard.html"
    })
    document.querySelector(".create-button").addEventListener("click",(e)=>{
        const inputValue = document.getElementById("subject-name").value;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                subjectName : inputValue 
            })
        };
        fetch("http://localhost:5000/api/add/course", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    })
}   