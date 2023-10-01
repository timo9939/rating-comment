let submitedBtn=document.getElementById("submit")
submitedBtn.addEventListener("click",submitRate )

function submitRate(){

    document.getElementById("mainPage").style.display="none";
console.log("Button Clicked");
document.getElementById("submitedPage").style.display="block"
}

console.log("js work")