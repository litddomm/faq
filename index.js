let myFirstItem = document.getElementById("myFirstItem");
let mySecondItem = document.getElementById("mySecondItem");
let myThirdItem = document.getElementById("myThirdItem");
let firstPara = document.querySelector(".myFirstPara");
let secondPara = document.querySelector(".mySecondPara");
let thirdPara = document.querySelector(".myThirdPara")

myFirstItem.addEventListener("click", openFirstItem);

function openFirstItem(){
    firstPara.classList.toggle("active")
}

mySecondItem.addEventListener("click", openSecondItem);

function openSecondItem(){
    secondPara.classList.toggle("active")
}

myThirdItem.addEventListener("click", openThirdItem);

function openThirdItem(){
    thirdPara.classList.toggle("active")
}