let submitedBtn = document.getElementById("submit");
let score = document.getElementById("ratingSpan")
let newPage=document.getElementById("submitedPage")

const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const btn4 = document.getElementById("4")
const btn5 = document.getElementById("5")
const buttons = document.querySelectorAll('.buttonforRate')


submitedBtn.addEventListener("click", submitRate)

let rateSelect
buttons.forEach((rateBtn) =>{
    rateBtn.addEventListener("click",()=>{
       rateSelect=rateBtn.textContent
       return rateSelect
    })
} 
)

function submitRate() {

    document.getElementById("mainPage").style.display = "none";
    console.log("Button Clicked");

newPage.classList.add("submitedPageClass")
    document.getElementById("submitedPage").classList.remove("disappear")
    // document.append(newPage)

    console.log("rateSelect is ", rateSelect)
    console.log("rateSelect Data Type is ", typeof (rateSelect))
    score.innerHTML = rateSelect


    
}






console.log("js work")