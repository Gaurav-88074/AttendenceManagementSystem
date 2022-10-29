window.onload = function() {
    document.querySelector(".name-logo").addEventListener('mouseenter',()=>{
        document.querySelector(".option").style.height = "100%";
    })
    document.querySelector(".option").addEventListener('mouseleave',()=>{
        document.querySelector(".option").style.height = "0%";
    })
    document.querySelector(".you").addEventListener('mouseleave',()=>{
        document.querySelector(".option").style.height = "0%";
    })
}